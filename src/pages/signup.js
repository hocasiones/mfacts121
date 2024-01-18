import { yupResolver } from "@hookform/resolvers/yup"
import {
	Box,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Stack,
	TextField,
	Typography,
	useTheme,
} from "@mui/material"
import { PayPalButtons } from "@paypal/react-paypal-js"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useMedia } from "react-use"
import { Query, database } from "src/appwrite/config"
import Logo from "src/components/Logo"
import SignInUp from "src/components/SignInUp"
import * as yup from "yup"

const schema = yup
	.object({
		firstName: yup.string().required(),
		lastName: yup.string().required(),
		email: yup.string().email().required(),
	})
	.required()

const SignUp = () => {
	const theme = useTheme()
	const isMobileView = useMedia("(max-width: 768px)")

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
		return
	}

	const onApprovePaypalOrder = async (data) => {
		return
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
					<Stack
						direction="row"
						flexWrap="wrap"
						spacing={isMobileView ? 0 : 2}
						justifyContent="space-between"
					>
						<Box sx={{ width: isMobileView ? "100%" : "48%" }}>
							<PayPalButtons
								createOrder={createPaypalOrder}
								onApprove={onApprovePaypalOrder}
							/>
						</Box>
						{/* <Box sx={{ width: isMobileView ? "100%" : "48%" }}>
							<PayPalButtons />
						</Box> */}
					</Stack>
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
		</SignInUp>
	)
}

export default SignUp
