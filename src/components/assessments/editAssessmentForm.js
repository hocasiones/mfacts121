import { DevTool } from "@hookform/devtools"
import { yupResolver } from "@hookform/resolvers/yup"
import { Delete } from "@mui/icons-material"
import LoadingButton from "@mui/lab/LoadingButton"
import {
	Box,
	Button,
	Divider,
	FormControl,
	FormControlLabel,
	FormLabel,
	IconButton,
	InputAdornment,
	InputLabel,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
	Stack,
	TextField,
	Typography,
	useTheme,
} from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { MuiColorInput } from "mui-color-input"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useList } from "react-use"

import { database } from "src/appwrite/config"
import userStore from "src/store/userStore"
import * as yup from "yup"

const schema = yup
	.object({
		type: yup.string().required(),
		name: yup.string().required("Name is a required field"),
		// description: yup.string(),
		duration: yup
			.number()
			.typeError("Duration must be a number in minutes")
			.moreThan(-1, "Cannot be negative")
			.transform((_, val) => (val !== "" ? Number(val) : null)),
		passingScore: yup
			.number()
			.typeError("Passing Percentage must be a number")
			.moreThan(-1, "Cannot be negative")
			.transform((_, val) => (val !== "" ? Number(val) : null)),
		// failedMessage: yup.string(),
		// successMessage: yup.string(),
		// prerequisite: yup.string(),
		order: yup
			.number()
			.typeError("Passing Percentage must be a number")
			.moreThan(-1, "Cannot be negative")
			.transform((_, val) => (val !== "" ? Number(val) : null)),
		items: yup.mixed(),
	})
	.required()

const EditAssessmentForm = ({ onClose, refetch, selected, data }) => {
	const theme = useTheme()
	const userState = userStore()

	const [
		list,
		{
			set,
			push,
			updateAt,
			insertAt,
			update,
			updateFirst,
			upsert,
			sort,
			filter,
			removeAt,
			clear,
			reset,
		},
	] = useList(JSON.parse(selected[0].questions))

	const [color, setColor] = useState(selected[0].color)

	const updateMutation = useMutation(async (formData) => {
		return await database.updateDocument(
			"main",
			"assessments",
			selected[0].id,
			formData
		)
	})

	const handleChange = (event) => {
		const {
			target: { value },
		} = event
		// setPersonName(
		//   // On autofill we get a stringified value.
		//   typeof value === 'string' ? value.split(',') : value
		// );
	}

	const {
		register,
		control,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			type: selected[0].type,
			name: selected[0].name,
			description: selected[0].description,
			duration: selected[0].duration,
			passingScore: selected[0].passingScore,
			successMessage: selected[0].successMessage,
			prerequisite: selected[0].prerequisite,
			order: selected[0].order,
		},
	})

	const onSubmit = async (formData) => {
		const dataToSubmit = {
			...formData,
			color,
			questions: JSON.stringify(list),
		}
		updateMutation.mutate(dataToSubmit, {
			onSuccess: async (data) => {
				refetch()
				userState.setNotice({
					enable: true,
					message: `Successfully Updated ${formData.name}`,
				})
				onClose(false)
			},
		})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack
				spacing={2}
				sx={{ mt: "10px", ".MuiInputBase-root": { margin: 0 } }}
			>
				{/* {isError && <Alert severity="error">Incorrect Username/Password.</Alert>} */}
				<FormControl>
					<FormLabel id="demo-row-radio-buttons-group-label" sx={{ m: 0 }}>
						Assessment Type
					</FormLabel>
					<RadioGroup
						row
						aria-labelledby="demo-row-radio-buttons-group-label"
						sx={{ ".MuiFormControlLabel-label": { m: "0 !important" } }}
						defaultValue={selected[0].type}
					>
						<FormControlLabel
							{...register("type")}
							value="practise"
							control={<Radio />}
							label="Online Practise"
						/>
						<FormControlLabel
							{...register("type")}
							value="assessment"
							control={<Radio />}
							label="Online Assessment"
						/>
					</RadioGroup>
				</FormControl>
				<Box>
					<TextField
						variant="outlined"
						fullWidth
						label="Name"
						{...register("name")}
						error={errors?.name}
						helperText={errors?.name?.message}
					/>
				</Box>
				<Box>
					<TextField
						{...register("description")}
						variant="outlined"
						label="Description"
						fullWidth
						multiline
						rows={3}
						style={{ textAlign: "left" }}
					/>
				</Box>
				<Box>
					<TextField
						variant="outlined"
						fullWidth
						label="Duration (Minutes)"
						{...register("duration")}
						error={errors?.duration}
						helperText={errors?.duration?.message}
					/>
				</Box>
				<Box>
					<TextField
						variant="outlined"
						fullWidth
						label="Passing Score"
						InputProps={{
							endAdornment: (
								<InputAdornment
									position="end"
									sx={{ ".MuiTypography-root": { m: 0 } }}
								>
									{`out of ${list.length} Q&A's`}
								</InputAdornment>
							),
						}}
						{...register("passingScore")}
						error={errors?.passingScore}
						helperText={errors?.passingScore?.message}
					/>
				</Box>
				<TextField
					{...register("failedMessage")}
					variant="outlined"
					label="Failed Message"
					fullWidth
					multiline
					rows={3}
					style={{ textAlign: "left" }}
				/>
				<TextField
					{...register("successMessage")}
					variant="outlined"
					label="Success Message"
					fullWidth
					multiline
					rows={3}
					style={{ textAlign: "left" }}
				/>
				<FormControl sx={{ minWidth: 80 }}>
					<InputLabel id="demo-simple-select-autowidth-label">
						Prequisite
					</InputLabel>
					<Select
						label="Prequisite"
						{...register("prerequisite")}
						defaultValue={selected[0].prerequisite}
					>
						<MenuItem value="">None</MenuItem>
						{data.map((val) => {
							return (
								val.id !== selected[0].id &&
								val.type === watch("type") && (
									<MenuItem key={val.id} value={val.name}>
										{val.name}
									</MenuItem>
								)
							)
						})}
					</Select>
				</FormControl>
				<Box>
					<TextField
						variant="outlined"
						label="Order"
						fullWidth
						{...register("order")}
						error={errors?.order}
						helperText={errors?.order?.message}
					/>
				</Box>
				<Box>
					<FormLabel>Assessment Color</FormLabel>
					<Box>
						<MuiColorInput
							defaultValue={theme.palette.common.blue}
							value={color}
							format="hex"
							onChange={(e) => {
								setColor(e)
								console.log(e)
							}}
						/>
					</Box>
				</Box>
				<Divider sx={{ mb: 2 }} />
				<Typography variant="body2" sx={{ fontWeight: "bold" }}>
					Questions:
				</Typography>
				<Stack spacing={2}>
					{list.map((el, i) => (
						<Stack key={i} direction="row" spacing={2} alignItems="center">
							<TextField
								variant="outlined"
								fullWidth
								label={`Question ${i + 1}`}
								value={el.question}
								onChange={(e) => {
									const answerValue =
										e.target.parentElement.parentElement.nextSibling.children[1]
											.firstChild.value
									updateAt(i, {
										question: e.target.value,
										answer: answerValue,
									})
								}}
							/>
							<TextField
								variant="outlined"
								fullWidth
								label="Answer"
								value={el.answer}
								onChange={(e) => {
									const questionValue =
										e.target.parentElement.parentElement.previousSibling
											.children[1].firstChild.value
									updateAt(i, {
										question: questionValue,
										answer: e.target.value,
									})
								}}
							/>
							<IconButton
								size="small"
								onClick={(e) => {
									removeAt(i)
								}}
							>
								<Delete variant="outlined" fontSize="inherit" color="error" />
							</IconButton>
						</Stack>
					))}
				</Stack>
				<Button
					variant="outlined"
					sx={{ width: "100%" }}
					onClick={(e) => {
						// push({ id: null, question: null, answer: null, assessmentId: null })
						set([...list, { id: list[0].id, question: null, answer: null }])
					}}
				>
					ADD QUESTION
				</Button>
				<Stack
					direction="row"
					justifyContent="end"
					spacing={1}
					sx={{ pt: "10px" }}
				>
					<LoadingButton
						type="submit"
						variant="contained"
						color="success"
						loading={updateMutation.isLoading}
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
				<DevTool control={control} />
			</Stack>
		</form>
	)
}

export default EditAssessmentForm
