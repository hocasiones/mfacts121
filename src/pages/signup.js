import {
	Box,
	Button,
	Stack,
	TextField,
	Typography,
	useTheme,
} from "@mui/material"
import Link from "next/link"
import Logo from "src/components/Logo"
import SignInUp from "src/components/SignInUp"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

const schema = yup
	.object({
		firstName: yup.string().required(),
		lastName: yup.string().required(),
		email: yup.string().email().required(),
	})
	.required()

const SignUp = () => {
	const theme = useTheme()

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

	return (
		<SignInUp maxWidth="600px">
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
						/>
						<TextField
							variant="outlined"
							label="Last Name"
							{...register("lastName")}
						/>
					</Stack>
					<TextField variant="outlined" label="Email" {...register("email")} />
					<TextField variant="outlined" label="School" />
					<Button variant="contained" size="large">
						REGISTER
					</Button>
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
