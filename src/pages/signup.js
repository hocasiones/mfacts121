import { yupResolver } from "@hookform/resolvers/yup"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import {
	Box,
	Button,
	FormControl,
	FormControlLabel,
	Portal,
	Radio,
	RadioGroup,
	Stack,
	TextField,
	Typography,
	useTheme,
	GlobalStyles,
} from "@mui/material"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import { PayPalButtons } from "@paypal/react-paypal-js"
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useQuery } from "@tanstack/react-query"
import ky from "ky"
import Link from "next/link"
import React from "react"
import { useForm } from "react-hook-form"
import { useMedia } from "react-use"
import { Query, database } from "src/appwrite/config"
import Logo from "src/components/Logo"
import SignInUp from "src/components/SignInUp"
import * as yup from "yup"
import userStore from "../store/userStore"

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripeSecret = require("stripe")(
	"sk_test_0gfZHymEXG8riNSCbxFkWL3D00S0JKgjxW"
)

const schema = yup
	.object({
		firstName: yup.string().required(),
		lastName: yup.string().required(),
		email: yup.string().email().required(),
	})
	.required()

const StripeForm = () => {
	const stripe = useStripe()
	const elements = useElements()

	const stripeSubmit = async (event) => {
		// We don't want to let default form submission happen here,
		// which would refresh the page.
		event.preventDefault()

		if (!stripe || !elements) {
			// Stripe.js hasn't yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return
		}

		elements.submit()

		const paymentIntent = await stripeSecret.paymentIntents.create({
			amount: 2000,
			currency: "usd",
			automatic_payment_methods: {
				enabled: true,
			},
		})

		const result = await stripe.confirmPayment({
			//`Elements` instance that was used to create the Payment Element
			elements,
			clientSecret: paymentIntent.client_secret,
			confirmParams: {
				return_url: "http://localhost:3034/signin/",
			},
		})

		if (result.error) {
			// Show error to your customer (for example, payment details incomplete)
			console.log(result.error.message)
		} else {
			// Your customer will be redirected to your `return_url`. For some payment
			// methods like iDEAL, your customer will be redirected to an intermediate
			// site first to authorize the payment, then redirected to the `return_url`.
		}
	}

	return (
		<Box>
			<form onSubmit={stripeSubmit}>
				<PaymentElement />
				<Button
					type="submit"
					variant="contained"
					size="large"
					sx={{ width: "100%", marginTop: "10px" }}
				>
					SUBMIT
				</Button>
			</form>
		</Box>
	)
}

const SignUp = () => {
	const userState = userStore()
	const theme = useTheme()
	const isMobileView = useMedia("(max-width: 768px)", false)
	const [expanded, setExpanded] = React.useState("panel1")
	const ref = React.useRef(null)

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false)
	}

	const membershipQuery = useQuery({
		queryKey: ["membership"],
		queryFn: async () => {
			return await database.listDocuments("main", "membership", [
				Query.notEqual("name", "Included"),
			])
		},
		onSuccess: (data) => {
			console.log(data)
		},
		onError: (error) => {
			console.log(error)
		},
	})

	const {
		register,
		handleSubmit,
		setValue,
		getFieldState,
		getValues,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})

	const createPaypalOrder = async (data) => {
		try {
			const order = await ky
				.post("/api/paypal/orders/create", { json: data })
				.json()
			console.log(order, "Order Created")
			return order.id
		} catch (error) {
			console.log(error)
		}
	}

	const onApprovePaypalOrder = async (data) => {
		try {
			const order = await ky
				.post("/api/paypal/orders/capture", { json: data })
				.json()
			console.log(order, "Order Complete")
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<SignInUp sx={{ width: 800, maxWidth: "100%", padding: "30px" }}>
			<form onSubmit={handleSubmit((formData) => {})}>
				<Stack>
					<Box
						sx={{
							padding: "0 10%",
							margin: "0 0 20px",
							"&>div": { display: "flex", justifyContent: "center" },
						}}
					>
						<Logo />
					</Box>
					<Typography variant="h4" sx={{ textAlign: "center" }}>
						Sign Up Form
					</Typography>
					<Stack direction="row" spacing={2}>
						<TextField
							variant="outlined"
							label="First Name"
							{...register("firstName")}
							sx={{ flex: 1 }}
						/>
						<TextField
							variant="outlined"
							label="Last Name"
							{...register("lastName")}
							sx={{ flex: 1 }}
						/>
					</Stack>
					<TextField variant="outlined" label="Email" {...register("email")} />
					<TextField variant="outlined" label="School" />

					<FormControl sx={{ marginBottom: "20px" }}>
						<Typography sx={{ marginBottom: "10px", fontWeight: "bold" }}>
							Membership Type:
						</Typography>
						<RadioGroup
							aria-labelledby="demo-radio-buttons-group-label"
							name="radio-buttons-group"
							sx={{
								".MuiFormControlLabel-label": {
									margin: "0 !important",
								},
							}}
						>
							{membershipQuery.data?.documents?.map((membership) => (
								<FormControlLabel
									key={membership.$id}
									value={membership.$id}
									control={<Radio />}
									label={`${membership.name} (${membership.description}) - $${membership.price}`}
								/>
							))}
						</RadioGroup>
					</FormControl>
					<Typography sx={{ fontWeight: "bold" }}>Payment Options:</Typography>
					<Accordion
						expanded={expanded === "panel1"}
						onChange={handleChange("panel1")}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1d-content"
							id="panel1d-header"
						>
							<Typography variant="h6" color="#000">
								Invoice
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Invoice will be sent to your email address. Please allow 24 to
								48 hours for processing.
							</Typography>
							<Button
								type="submit"
								variant="contained"
								size="large"
								sx={{ width: "100%", marginTop: "10px" }}
							>
								SUBMIT
							</Button>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={expanded === "panel2"}
						onChange={handleChange("panel2")}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2d-content"
							id="panel2d-header"
						>
							<Typography variant="h6" color="#09368e">
								PayPal
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<PayPalButtons
								createOrder={createPaypalOrder}
								onApprove={onApprovePaypalOrder}
							/>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={expanded === "panel3"}
						onChange={handleChange("panel3")}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel3d-content"
							id="panel3d-header"
						>
							<Typography variant="h6" color="#6860ff">
								Stripe
							</Typography>
						</AccordionSummary>
						<AccordionDetails ref={ref}></AccordionDetails>
					</Accordion>
					{/* <Button variant="contained" size="large">
						REGISTER
					</Button> */}
				</Stack>
			</form>
			<Link href="/signin/">
				<Typography
					sx={{
						margin: "20px 0 0",
						textAlign: "center",
						fontSize: "13px",
						cursor: "pointer",
						color: theme.palette.common.orange,
					}}
				>
					Already have an account? Sign In
				</Typography>
			</Link>
			<Portal container={ref.current}>
				{userState.stripePaymentIntentSecret && <StripeForm />}
			</Portal>
		</SignInUp>
	)
}

export default SignUp
