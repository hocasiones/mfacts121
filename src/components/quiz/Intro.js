import { LoadingButton } from "@mui/lab"
import { Box, Typography } from "@mui/material"
import _ from "lodash"
import userStore from "src/store/userStore"

const QuizIntro = ({ data, setintro, setcontent, startTimer }) => {
	// const state = userStore();

	return (
		<Box sx={{ textAlign: "center" }}>
			<Typography variant="h5">{_.capitalize(data.type)} Details:</Typography>
			<Typography sx={{ mb: 1 }}>
				<strong>Name:</strong> {data.name}
			</Typography>
			{data.type === "assessment" && (
				<>
					<Typography sx={{ mb: 1 }}>
						<strong>Prerequisite:</strong> {data.prerequisite || "None"}
					</Typography>
					<Typography sx={{ mb: 1 }}>
						<strong>Time Limit:</strong> {data.duration} seconds
					</Typography>
				</>
			)}
			<Typography sx={{ mb: 1 }}>
				<strong>Total Items:</strong> {data.questions?.length}
			</Typography>
			{data.type === "assessment" && (
				<Typography sx={{ mb: 1 }}>
					<strong>Passing Score:</strong> {data.passingScore}
				</Typography>
			)}

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
					setintro(false)
					setcontent(true)
					startTimer(data.duration === 0 ? 999 * 1000 : data.duration * 1000)

					// if (state.practiceTaken?.find((item) => item?.name === data.name) === undefined) {
					//   state.setPracticeTaken([...state.practiceTaken, { name: data.name, consecutive: 1 }]);
					// } else {
					//   state.setPracticeTaken(
					//     state.practiceTaken.map((item) => {
					//       if (item.name === data.name) {
					//         return { ...item, consecutive: item.consecutive + 1 };
					//       } else {
					//         return item;
					//       }
					//     })
					//   );
					// }
				}}
			>
				Start {_.capitalize(data.type)}
			</LoadingButton>
		</Box>
	)
}

export default QuizIntro
