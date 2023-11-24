import { LoadingButton } from "@mui/lab"
import { Box } from "@mui/material"
import _ from "lodash"

const QuizIntro = ({ data, setIntro, setContent, startTimer }) => {
	return (
		<Box sx={{ textAlign: "center" }}>
			{/* <>
				<Typography variant="h5">
					{_.capitalize(data.type)} Details:
				</Typography>
				<Typography sx={{ mb: 1 }}>
					<strong>Name:</strong> {data.name}
				</Typography>
				<Typography sx={{ mb: 1 }}>
					<strong>Prerequisite:</strong> {data.prerequisite || "None"}
				</Typography>
				<Typography sx={{ mb: 1 }}>
					<strong>Time Limit:</strong> {data.duration} seconds
				</Typography>
				<Typography sx={{ mb: 1 }}>
					<strong>Total Items:</strong> {data.questions?.length}
				</Typography>
				<Typography sx={{ mb: 1 }}>
					<strong>Passing Score:</strong> {data.passingScore}
				</Typography>
			</> */}

			<LoadingButton
				loading={data.length === 0}
				variant="contained"
				color="primary"
				// size="large"
				sx={{
					// width: '200px',
					fontSize: "18px",
					// display: 'block',
					margin: "50px auto",
				}}
				onClick={() => {
					setIntro(false)
					setContent(true)
					startTimer(data.duration === 0 ? 999 * 1000 : data.duration * 1000)
				}}
			>
				Start {_.capitalize(data.type)}
			</LoadingButton>
		</Box>
	)
}

export default QuizIntro
