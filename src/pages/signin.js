import { yupResolver } from "@hookform/resolvers/yup"
import LoadingButton from "@mui/lab/LoadingButton"
import {
	Alert,
	Box,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Stack,
	TextField,
	Typography,
	useTheme,
} from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { account, database } from "src/appwrite/config"
import Logo from "src/components/Logo"
import SignInUp from "src/components/SignInUp"
import userStore from "src/store/userStore"
import validator from "validator"
import * as yup from "yup"

const SignIn = () => {
	const theme = useTheme()
	const userState = userStore((state) => state)
	const router = useRouter()

	const schema = yup
		.object({
			Username: yup.string().required(),
			Password: yup.string().min(6).required(),
			AgreeTerms: yup
				.bool() // use bool instead of boolean
				.oneOf([true]),
			Remember: yup.bool(),
		})
		.required()

	const {
		register,
		handleSubmit,
		setValue,
		getFieldState,
		getValues,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			Username: "",
			Password: "",
			AgreeTerms: false,
			Remember: false,
		},
	})

	const inputUsername = getFieldState("Username")
	const inputPassword = getFieldState("Password")
	const inputAgreeTerms = getFieldState("AgreeTerms")

	const { data, isLoading, isSuccess, isError, error, mutate } = useMutation({
		mutationFn: async (formData) => {
			let formattedEmail
			validator.isEmail(formData.Username)
				? (formattedEmail = formData.Username)
				: (formattedEmail = `${formData.Username}@mfacts121.com`)

			const auth = await account.createEmailSession(
				formattedEmail,
				formData.Password
			)

			const user = await database.getDocument("main", "users", auth.userId)

			return { auth, user }
		},
		onSuccess: async (data) => {
			// store global states
			userState.setAuth(data.auth)
			userState.setUser(data.user)
			userState.setRemember(getValues("Remember"))

			userState.setNotice({
				enable: true,
				message: "Welcome! You have successfully logged in.",
			})

			//redirect
			router.push("/dashboard")
		},
		onError: (error) => {
			console.log(error)
		},
	})

	const OnSubmit = (formData) => {
		mutate(formData)
	}

	return (
		<SignInUp>
			<form onSubmit={handleSubmit(OnSubmit)}>
				<Stack spacing={2} sx={{ ".MuiInputBase-root": { margin: 0 } }}>
					<Box
						sx={{
							padding: "0 10%",
							margin: "0 0 20px",
							"&>div": { display: "flex", justifyContent: "center" },
						}}
					>
						<Logo disabledLink />
					</Box>
					<Typography variant="h4" sx={{ textAlign: "center" }}>
						SIGN IN
					</Typography>
					{isError && (
						<Alert severity="error">Incorrect Username/Password.</Alert>
					)}
					<TextField
						variant="outlined"
						label="Email / Username for Students"
						{...register("Username")}
						error={inputUsername.invalid && inputUsername.isTouched}
						helperText={
							inputUsername.error?.message && inputUsername.isTouched
								? inputUsername.error?.message
								: false
						}
					/>
					<TextField
						variant="outlined"
						label="Password"
						type="password"
						{...register("Password")}
						error={inputPassword.invalid && inputPassword.isTouched}
						helperText={
							inputPassword.error?.message && inputPassword.isTouched
								? inputPassword.error?.message
								: false
						}
					/>
					<Typography
						variant="body1"
						sx={{
							cursor: "pointer",
							fontSize: "13px",
							textAlign: "right",
							color: theme.palette.common.orange,
						}}
						onClick={() => {
							router.push("/forgot-password/")
						}}
					>
						Forgot Password?
					</Typography>
					<FormGroup
						sx={{
							margin: "0 0 15px",

							".MuiFormControlLabel-labelPlacementEnd": {
								margin: "0 0 5px",
							},
							".Mui-error": {
								margin: "0 0 10px",
							},
							".MuiTypography-body1": {
								margin: "0 0 0 5px !important",
								fontSize: "13px !important",
							},
						}}
					>
						<FormControlLabel
							control={
								<Checkbox
									{...register("AgreeTerms", {
										validate: (val) => val === true,
									})}
									color="success"
									sx={{ padding: 0 }}
								/>
							}
							label="I agree to the Mfacts121 Terms of Use and Collection Notice."
							sx={{
								alignItems: "start",
								color: inputAgreeTerms.invalid ? "red" : false,
							}}
						/>
						<FormControlLabel
							control={
								<Checkbox
									{...register("Remember", { validate: (val) => val === true })}
									color="success"
									sx={{ padding: 0 }}
								/>
							}
							label="Remember Me"
						/>
					</FormGroup>
					<LoadingButton
						loading={isLoading}
						loadingPosition="center"
						variant="contained"
						size="medium"
						type="submit"
					>
						LOGIN
					</LoadingButton>
					<Typography
						variant="body2"
						sx={{
							cursor: "pointer",
							fontSize: "13px",
							textAlign: "center",
							color: theme.palette.common.orange,
						}}
						onClick={() => {
							router.push("/signup/")
						}}
					>
						Register New Account
					</Typography>
				</Stack>
			</form>
		</SignInUp>
	)
}

export default SignIn
