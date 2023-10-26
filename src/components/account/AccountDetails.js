import { DevTool } from "@hookform/devtools"
import { yupResolver } from "@hookform/resolvers/yup"
import { AccountCircle, PhotoCamera } from "@mui/icons-material"
import LoadingButton from "@mui/lab/LoadingButton"
import {
	Avatar,
	Box,
	Card,
	CardContent,
	CircularProgress,
	Grid,
	IconButton,
	Stack,
	TextField,
	Typography,
} from "@mui/material"
import { useMutation, useQuery } from "@tanstack/react-query"
import ky from "ky"
import { useState } from "react"
import { useForm } from "react-hook-form"
import userStore from "src/store/userStore"
import * as yup from "yup"
import AvatarDialog from "../avatars/AvatarDialog"
import { account, database, storage } from "src/appwrite/config"

const schema = yup
	.object({
		firstName: yup.string().required("First Name is a required field"),
		lastName: yup.string().required("Last Name is a required field"),
		email: yup.string().email().required(),
		// role: yup.string().required(),
		// school: yup.string().required(),
	})
	.required()

const AccountDetails = () => {
	const userState = userStore()
	const [photo, setPhoto] = useState(null)
	const [dialogState, setDialogState] = useState(false)

	const userQuery = useQuery({
		queryKey: ["user"],
		queryFn: async () => {
			return await database.getDocument("main", "users", userState.User.$id)
		},
		onSuccess: (data) => {
			// console.log(data)
			setPhoto(JSON.parse(data.avatar))
			setValue("firstName", data.firstName)
			setValue("lastName", data.lastName)
			setValue("email", data.email)
			setValue("role", data.role)
			setValue("schoolName", data.schoolName)
		},
		enabled: userState.User ? true : false,
	})

	const mutation = useMutation(
		async (formData) => {
			const user = await ky
				.post("/api/users/update", {
					json: formData,
				})
				.json()

			const userDB = await database.updateDocument("main", "users", user.$id, {
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
				// schools:
			})

			return userDB
		},
		{
			onSuccess: (data) => {
				// console.log(data)
				userState.setUser(data)
				userQuery.refetch()
				userState.setNotice({
					enable: true,
					message: "Successfully Updated Profile",
				})
				userQuery.refetch()
			},
			onError: (error) => {
				console.log(error)
			},
		}
	)

	// const photoMutation = useMutation({
	// 	mutationFn: async (file) => {
	// 		const fileID = `${userState.User.$id}-avatar`
	// 		const uploaded = await storage.createFile("avatars", fileID, file)
	// 		const avatar = await storage.getFilePreview("avatars", uploaded.$id)
	// 		const user = await account.updatePrefs({
	// 			...userState.User.prefs,
	// 			avatar: avatar.href,
	// 		})
	// 		return { uploaded, user }
	// 	},
	// 	onSuccess: async (data) => {
	// 		console.log(data)
	// 		userState.setUser(data.user)
	// 		// setPhoto(JSON.parse(user.user.image))
	// 		userState.setNotice({
	// 			enable: true,
	// 			message: "Successfully Uploaded Photo",
	// 		})
	// 	},
	// })

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		control,
		getFieldState,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})

	// const photoSubmit = (el) => {
	// 	photoMutation.mutate(el.target.files[0])
	// }

	const onSubmit = async (formData) => {
		mutation.mutate({ ...formData, id: userState.User.$id })
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid container spacing={5} sx={{ justifyContent: "center" }}>
					<Grid item xs={12} md={4}>
						<Card>
							<CardContent>
								<Stack spacing={0}>
									<Box sx={{ textAlign: "center", mb: 2 }}>
										{userQuery.isLoading ? (
											<CircularProgress />
										) : (
											<Avatar
												src={photo?.src || null}
												sx={{ width: 150, height: 150, display: "inline-flex" }}
											/>
										)}
									</Box>
									<AvatarDialog
										dialogState={dialogState}
										setDialogState={setDialogState}
										userQuery={userQuery}
									/>
									<Stack
										direction="column"
										justifyContent="space-evenly"
										alignItems="center"
										spacing={2}
									>
										<LoadingButton
											variant="contained"
											color="success"
											component="label"
											size="small"
											onClick={() => {
												setDialogState(true)
											}}
											// loading={photoMutation.isLoading}
										>
											&nbsp; Choose Avatar
											<IconButton
												color="primary"
												aria-label="upload picture"
												component="label"
											>
												<AccountCircle sx={{ color: "#FFF" }} />
											</IconButton>
										</LoadingButton>
										{/* <LoadingButton
											variant="contained"
											component="label"
											size="small"
											onChange={photoSubmit}
											loading={photoMutation.isLoading}
										>
											&nbsp; Upload Image
											<IconButton
												color="primary"
												aria-label="upload picture"
												component="label"
											>
												<input hidden accept="image/*" type="file" />
												<PhotoCamera sx={{ color: "#FFF" }} />
											</IconButton>
										</LoadingButton> */}
									</Stack>
								</Stack>
							</CardContent>
						</Card>
					</Grid>
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
										<Typography variant="h5">Account Details</Typography>
									</Box>
									<Box>
										<TextField
											label="First Name"
											{...register("firstName")}
											fullWidth
											error={
												getFieldState("firstName").invalid &&
												getFieldState("firstName").isTouched
											}
											helperText={
												getFieldState("firstName").error?.message &&
												getFieldState("firstName").isTouched
													? getFieldState("firstName").error?.message
													: false
											}
											value={watch("firstName") || ""}
										/>
									</Box>
									<Box>
										<TextField
											label="Last Name"
											{...register("lastName")}
											fullWidth
											error={
												getFieldState("lastName").invalid &&
												getFieldState("lastName").isTouched
											}
											helperText={
												getFieldState("lastName").error?.message &&
												getFieldState("lastName").isTouched
													? getFieldState("lastName").error?.message
													: false
											}
											value={watch("lastName") || ""}
										/>
									</Box>
									<Box>
										<TextField
											label="Email Address"
											{...register("email")}
											// disabled
											fullWidth
											value={watch("email") || ""}
										/>
									</Box>
									<Box>
										<TextField
											label="Account Type"
											{...register("role")}
											disabled
											fullWidth
											value={watch("role") || ""}
										/>
									</Box>
									<Box>
										<TextField
											label="School"
											{...register("schoolName")}
											disabled
											fullWidth
											value={watch("schoolName") || ""}
										/>
									</Box>
									<Box>
										<TextField
											label="Classes"
											{...register("classes")}
											disabled
											fullWidth
										/>
									</Box>
									{/* <FormControl>
                <InputLabel htmlFor="select-multiple-native">Class</InputLabel>
                <Select
                  multiple
                  native
                  label="Class"
                  inputProps={{
                    id: 'select-multiple-native',
                  }}
                >
                  <option>TEst</option>
                </Select>
              </FormControl> */}
									<Box sx={{ display: "flex", justifyContent: "end" }}>
										<LoadingButton
											loading={mutation.isLoading}
											variant="contained"
											type="submit"
										>
											UPDATE
										</LoadingButton>
									</Box>
								</Stack>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
				<DevTool control={control} />
			</form>
		</>
	)
}

export default AccountDetails
