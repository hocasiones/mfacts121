import { DevTool } from "@hookform/devtools"
import { yupResolver } from "@hookform/resolvers/yup"
import LoadingButton from "@mui/lab/LoadingButton"
import {
	Button,
	FormControl,
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
import { useForm } from "react-hook-form"
import userStore from "src/store/userStore"
import * as yup from "yup"
import { useState } from "react"
import { database, Query } from "src/appwrite/config"

const schema = yup
	.object({
		name: yup.string().required(),
		schools: yup.string().required(),
	})
	.required()

const EditClassForm = ({ onClose, refetch, selected }) => {
	const theme = useTheme()
	const userState = userStore()
	const [schools, setSchools] = useState([])

	const querySchool = useQuery({
		queryKey: ["schools"],
		queryFn: async () => {
			return await database.listDocuments("main", "schools", [Query.limit(100)])
		},
		onSuccess: (data) => {
			setSchools(data.documents)
		},
	})

	const addMutation = useMutation(async (formData) => {
		return await database.updateDocument(
			"main",
			"classes",
			selected[0].id,
			formData
		)
	})

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			name: selected[0].name,
			schools: selected[0].schools.$id,
		},
	})

	const onSubmit = async (formData) => {
		addMutation.mutate(formData, {
			onSuccess: async (data) => {
				userState.setNotice({
					enable: true,
					message: "Class updated successfully",
				})
				refetch()
				onClose(false)
			},
		})
	}

	return (
		<Stack sx={{ margin: "10px 0 0" }} spacing={0}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack>
					<TextField
						variant="outlined"
						fullWidth
						label="Name"
						{...register("name")}
					/>
					<FormControl fullWidth>
						<InputLabel
							id="school-select-label"
							color={errors.schools && "error"}
						>
							School
						</InputLabel>
						<Select
							labelId="school-select-label"
							label="School"
							{...register("schools")}
							defaultValue={selected[0].schools.$id}
							error={errors.schools}
						>
							{schools?.map((school, i) => (
								<MenuItem key={i} value={school.$id}>
									{school.name}
								</MenuItem>
							))}
						</Select>
						{errors.schools && (
							<FormHelperText sx={{ color: theme.palette.common.red }}>
								{errors?.school?.message}
							</FormHelperText>
						)}
					</FormControl>
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
						color="success"
						// loading
						loadingPosition="center"
						sx={{ color: theme.palette.common.white }}
					>
						Update
					</LoadingButton>
					<Button
						variant="outlined"
						color="warning"
						onClick={() => onClose(false)}
					>
						Cancel
					</Button>
				</Stack>
			</form>
			<DevTool control={control} />
		</Stack>
	)
}

export default EditClassForm
