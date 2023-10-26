import { DevTool } from "@hookform/devtools"
import { yupResolver } from "@hookform/resolvers/yup"
import LoadingButton from "@mui/lab/LoadingButton"
import { Box, Button, Stack, TextField, useTheme } from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import ky from "ky"
import { useForm } from "react-hook-form"
import userStore from "src/store/userStore"
import * as yup from "yup"
import { database } from "src/appwrite/config"

const schema = yup
	.object({
		name: yup.string().required(),
	})
	.required()

const EditSchoolForm = ({ onClose, refetch, selected }) => {
	const userState = userStore()

	const addMutation = useMutation(async (formData) => {
		return await database.updateDocument(
			"main",
			"schools",
			selected[0].$id,
			formData
		)
	})

	const theme = useTheme()

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			name: selected[0].name,
		},
	})

	const onSubmit = async (formData) => {
		addMutation.mutate(formData, {
			onSuccess: async (data) => {
				userState.setNotice({
					color: "success",
					message: "School updated successfully",
					enable: true,
				})
				refetch()
				onClose(false)
			},
		})
	}

	return (
		<Stack sx={{ margin: "10px 0 0" }} spacing={0}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Box>
					<TextField
						variant="outlined"
						fullWidth
						label="School Name"
						{...register("name")}
					/>
				</Box>
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

export default EditSchoolForm
