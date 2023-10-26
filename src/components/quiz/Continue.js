import { Box, Button, Stack } from "@mui/material"
import _ from "lodash"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import userStore from "src/store/userStore"
import Games from "./Games"

const QuizContinue = ({ data, handleRetake, score }) => {
	const router = useRouter()
	const userState = userStore()
	const [displayGameButton, setDisplayGameButton] = useState(false)
	const [displayGamePopup, setDisplayGamePopup] = useState(false)
	const [gameNumber, setGameNumber] = useState(0)
	const [closeGame, setCloseGame] = useState(false)
	const [gameTimeLeft, setGameTimeLeft] = useState(60)

	//Should display game popup
	useEffect(() => {
		if (!closeGame) {
			if (
				(data.type === "assessment" && score >= data.passingScore) ||
				(data.type === "practise" && userState.practicePassed >= 3)
			) {
				setDisplayGameButton(true)
			}
		}
	}, [score, data, closeGame, userState])

	//Auto Close Game Popup
	useEffect(() => {
		if (displayGamePopup) {
			const timer = setTimeout(() => {
				setGameTimeLeft((prev) => prev - 1)
			}, 1000)
			if (gameTimeLeft === 0) {
				clearInterval(timer)
				setDisplayGamePopup(false)
				setCloseGame(true)
				setGameTimeLeft(60)
			}
		}
		// console.log(gameTimeLeft);
	}, [displayGamePopup, gameTimeLeft])

	return (
		<Box sx={{ textAlign: "center", mb: 5 }}>
			{displayGamePopup && (
				<Games
					open={displayGamePopup}
					number={gameNumber}
					gameTimeLeft={gameTimeLeft}
					onClose={() => {
						setDisplayGamePopup(false)
						setCloseGame(true)
					}}
				/>
			)}
			<Stack direction="row" spacing={3} justifyContent="center">
				{displayGameButton && (
					<Button
						variant="contained"
						color="error"
						sx={{
							width: "150px",
							fontSize: "16px",
						}}
						onClick={() => {
							setDisplayGamePopup(true)
							setGameNumber(1)
							data.type === "practise" && userState.setPracticePassed(0)
						}}
					>
						Play a Game
					</Button>
				)}
				{score >= data.passingScore && (
					<Button
						variant="contained"
						color="secondary"
						sx={{
							width: "150px",
							fontSize: "16px",
						}}
						onClick={() => router.push(`/online-${data.type}`)}
					>
						Continue
					</Button>
				)}
				<Button
					variant="contained"
					color="primary"
					sx={{ fontSize: "16px" }}
					onClick={handleRetake}
				>
					Retake {_.capitalize(data.type)}
				</Button>
			</Stack>
		</Box>
	)
}

export default QuizContinue
