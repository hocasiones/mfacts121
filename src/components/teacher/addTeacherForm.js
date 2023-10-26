import { DevTool } from "@hookform/devtools"
import { yupResolver } from "@hookform/resolvers/yup"
import LoadingButton from "@mui/lab/LoadingButton"
import {
	Alert,
	Box,
	Button,
	Checkbox,
	Divider,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	TextField,
	useTheme,
} from "@mui/material"
import { useMutation, useQuery } from "@tanstack/react-query"
import ky from "ky"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useList } from "react-use"
import { Query, database } from "src/appwrite/config"
import userStore from "src/store/userStore"
import * as yup from "yup"

const schema = yup
	.object({
		firstName: yup.string().required("First Name is required"),
		lastName: yup.string().required("Last Name is required"),
		email: yup.string().email().required("Email is required"),
	})
	.required()

const AddTeacherForm = ({ onClose, refetch }) => {
	const theme = useTheme()
	const userState = userStore()
	const [
		classList,
		{ insertAt: insertAtClassList, removeAt: removeAtClassList },
	] = useList([])
	const [classes, setClasses] = useState([])

	const classQuery = useQuery({
		queryKey: ["classes"],
		queryFn: async () => {
			if (userState.User.role === "schooladmin")
				return await database.listDocuments("main", "classes", [
					Query.limit(100),
					Query.equal("schools", userState.User.schools.$id),
				])

			return await database.listDocuments("main", "classes")
		},
		onSuccess: (data) => {
			// console.log(data)
			setClasses(data.documents)
		},
		onError: (error) => {
			console.log(error)
		},
	})

	const addMutation = useMutation({
		mutationFn: async (formData) => {
			const user = await ky.post("/api/users/create", { json: formData }).json()
			const userDB = await database.createDocument("main", "users", user.$id, {
				email: formData.email,
				firstName: formData.firstName,
				lastName: formData.lastName,
				role: "teacher",
				schools: userState.User.schools.$id,
				classes: classList.filter((el) => el !== null),
			})
			return userDB.documents
		},
		onSuccess: async (data) => {
			console.log(data)
			refetch()
			onClose(false)
			userState.setNotice({
				enable: true,
				message: "User added successfully",
			})
		},
		onError: (error) => {
			console.log(error)
		},
	})

	const {
		register,
		control,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})

	return (
		<form
			onSubmit={handleSubmit(async (formData) => {
				// console.log(formData)
				// console.log(classList)
				addMutation.mutate({
					...formData,
					password: watch("firstName") + watch("lastName"),
					role: "teacher",
					schoolId: userState.User.schoolId,
					classes: classList.filter((el) => el !== null),
				})
			})}
		>
			<Stack
				spacing={2}
				sx={{
					".MuiOutlinedInput-root": {
						m: 0,
					},
					padding: "10px 0 0",
				}}
			>
				{addMutation.isError && (
					<Alert color="error">Email already exists. Please try again.</Alert>
				)}
				<Box>
					<TextField
						variant="outlined"
						fullWidth
						label="First Name"
						{...register("firstName")}
						error={errors.firstName}
						helperText={errors?.firstName?.message}
					/>
				</Box>
				<Box>
					<TextField
						variant="outlined"
						fullWidth
						label="Last Name"
						{...register("lastName")}
						error={errors.lastName}
						helperText={errors?.lastName?.message}
					/>
				</Box>
				<Box>
					<TextField
						variant="outlined"
						fullWidth
						label="Password"
						value={watch("firstName") + watch("lastName") || ""}
						disabled
					/>
				</Box>
				<Box>
					<TextField
						variant="outlined"
						fullWidth
						label="Email"
						{...register("email")}
						error={errors.email}
						helperText={errors?.email?.message}
					/>
				</Box>
				<Stack spacing={2}>
					<Divider textAlign="center" sx={{ fontSize: 14 }}>
						Classes
					</Divider>
					<FormGroup>
						{classes.map((c, i) => (
							<FormControlLabel
								key={i}
								control={<Checkbox />}
								label={c.name}
								value={c.$id}
								onChange={(e) => {
									if (e.target.checked) {
										insertAtClassList(i, c.$id)
									} else {
										removeAtClassList(i)
									}
								}}
								sx={{
									m: 0,
									span: {
										m: "0 !important",
									},
								}}
							/>
						))}
					</FormGroup>
				</Stack>
				<Stack
					direction="row"
					justifyContent="end"
					spacing={1}
					sx={{ margin: "5px 0 0" }}
				>
					<LoadingButton
						type="submit"
						variant="contained"
						loading={addMutation.isLoading}
						loadingPosition="center"
						sx={{ color: theme.palette.common.white }}
					>
						Submit
					</LoadingButton>
					<Button
						variant="outlined"
						color="warning"
						onClick={() => onClose(false)}
					>
						Cancel
					</Button>
				</Stack>
			</Stack>
			<DevTool control={control} />
		</form>
	)
}

export default AddTeacherForm
