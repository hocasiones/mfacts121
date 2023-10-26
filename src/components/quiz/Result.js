import {
	Box,
	Card,
	CardContent,
	Stack,
	Typography,
	useTheme,
} from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import ky from "ky"
import { forwardRef } from "react"
import { useState } from "react"
import { Query, database } from "src/appwrite/config"

const QuizResults = (
	{
		data,
		list,
		resultRef,
		timeLeft,
		score,
		mistakes,
		timeFinished,
		userState,
		router,
	},
	ref
) => {
	const theme = useTheme()
	const [personalBestTime, setPersonalBestTime] = useState(0)

	//user quizzes
	const userQuizzes = useQuery({
		queryKey: ["userQuizzes"],
		queryFn: async () => {
			return await database.listDocuments(
				"main",
				"quizzes",
				[Query.limit(100)],
				Query.equal("userID", userState.User.$id)
			)
		},
		onSuccess: (data) => {
			// console.log("data", data.documents)
			const timeFinished = data.documents.map((el) => el.timeFinished)
			if (timeFinished.length > 0) {
				setPersonalBestTime(() => {
					return timeFinished.reduce((prev, curr) => {
						return Math.min(prev, curr)
					})
				})
			}
		},
		enabled: !!userState.User,
	})

	return (
		<Box mb={5}>
			<Card ref={ref}>
				<CardContent sx={{ textAlign: "center" }}>
					<Stack spacing={2}>
						{score >= data.passingScore ? (
							<Typography
								variant="h2"
								mb={1}
								sx={{ color: theme.palette.common.green }}
							>
								Success!
							</Typography>
						) : (
							<Typography
								variant="h2"
								mb={1}
								sx={{ color: theme.palette.common.orange }}
							>
								Keep Working On It!
							</Typography>
						)}
						{/* <Typography
                variant="h3"
                mb={2}
                color={score >= data.passingScore ? theme.palette.common.green : theme.palette.common.red}
              >
                {score >= data.passingScore ? 'Success!' : 'You Failed! '}
              </Typography> */}
						<Typography variant="p" mb={3}>
							{score >= data.passingScore
								? data.successMessage
								: data.failedMessage}
						</Typography>
						{userQuizzes?.data?.documents?.length > 0 && (
							<Typography
								variant="h5"
								color={theme.palette.common.blue}
								sx={{
									display:
										data.type === "practise" &&
										personalBestTime < timeFinished &&
										score >= data.passingScore
											? "none"
											: "inline",
								}}
							>
								<strong>Personal Best: {personalBestTime} seconds</strong>
							</Typography>
						)}
						<Typography variant="p">
							<strong>Your Time: {timeFinished} seconds</strong>
						</Typography>

						<Typography variant="p">
							<strong>
								Score: {score} / {data.questions.length}
							</strong>
						</Typography>
						<Typography variant="p">
							<strong>Mistakes: {mistakes}</strong>
						</Typography>
					</Stack>
				</CardContent>
			</Card>
		</Box>
	)
}

export default forwardRef(QuizResults)
