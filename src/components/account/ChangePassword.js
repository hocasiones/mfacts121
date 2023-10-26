import React from "react"
import {
	Grid,
	Box,
	Card,
	CardContent,
	CardActions,
	Stack,
	Button,
	IconButton,
	TextField,
	Typography,
} from "@mui/material"

import { useForm } from "react-hook-form"
import * as yup from "yup"
import { DevTool } from "@hookform/devtools"
import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation } from "@tanstack/react-query"
import { LoadingButton } from "@mui/lab"
import _ from "lodash"
import userStore from "src/store/userStore"
import { useRouter } from "next/router"
import { useLocalStorage } from "react-use"
import ky from "ky"

const ChangePassword = () => {
	const userState = userStore()
	const router = useRouter()
	const [value, setValue, remove] = useLocalStorage("userState")

	const mutation = useMutation({
		mutationFn: async (formData) => {
			return await ky
				.post("/api/users/update", {
					json: {
						...userState.User,
						email: userState.User.email,
						password: formData.password,
					},
				})
				.json()
		},
		onSuccess: (data) => {
			userState.setUser(data.user)
			userState.setNotice({
				enable: true,
				message: "Successfully Updated Password",
			})
			reset()
		},
	})

	const schema = yup
		.object({
			password: yup.string().required().min(8).max(16),
			rePassword: yup
				.string()
				.required("Confirm Password is a required field")
				.oneOf([yup.ref("password")], "Your passwords do not match."),
		})
		.required()

	const {
		register,
		handleSubmit,
		watch,
		control,
		getFieldState,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})

	const onSubmit = (formData) => {
		mutation.mutate(formData)
	}

	return (
		<Box>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid container sx={{ justifyContent: "center" }}>
					<Grid item xs={12} md={8}>
						<Card>
							<CardContent
								sx={{
									".MuiOutlinedInput-root": {
										m: 0,
									},
									".MuiFormHelperText-root": {
										m: "10px",
									},
								}}
							>
								<Stack spacing={2}>
									<Box>
										<Typography variant="h5">Change Password</Typography>
									</Box>
									<Box>
										<TextField
											label="Type New Password"
											type="password"
											{...register("password")}
											error={
												getFieldState("password").invalid &&
												getFieldState("password").isTouched
											}
											helperText={
												getFieldState("password").error?.message &&
												getFieldState("password").isTouched
													? _.upperFirst(
															getFieldState("password").error?.message
													  )
													: false
											}
											fullWidth
										/>
									</Box>
									<Box>
										<TextField
											label="Confirm New Password"
											type="password"
											{...register("rePassword")}
											error={
												getFieldState("rePassword").invalid &&
												getFieldState("rePassword").isTouched
											}
											helperText={
												getFieldState("rePassword").error?.message &&
												getFieldState("rePassword").isTouched
													? _.upperFirst(
															getFieldState("rePassword").error?.message
													  )
													: false
											}
											fullWidth
										/>
									</Box>
									<Box sx={{ display: "flex", justifyContent: "end" }}>
										<LoadingButton
											variant="contained"
											type="submit"
											loading={mutation.isLoading}
										>
											UPDATE PASSWORD
										</LoadingButton>
									</Box>
								</Stack>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</form>
			<DevTool control={control} />
		</Box>
	)
}

export default ChangePassword
