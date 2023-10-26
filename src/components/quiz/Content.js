import { LoadingButton } from "@mui/lab"
import {
	Box,
	Card,
	CardContent,
	Grid,
	TextField,
	Typography,
	useTheme,
} from "@mui/material"
import { forwardRef, useEffect } from "react"
import validator from "validator"

const QuizContent = (
	{ data, updateAt, list, result, handleSubmit, timeLeft, isLoading },
	ref
) => {
	const theme = useTheme()
	// useEffect(() => {
	// 	console.log(list)
	// }, [list])

	return (
		<Box sx={{ mb: 5, pointerEvents: result && "none" }}>
			{!result && (
				<Box
					sx={{
						textAlign: "center",
						visibility: "hidden",
					}}
				>
					<Typography sx={{ fontWeight: "bold" }}>
						Time left: {timeLeft / 1000} seconds
					</Typography>
				</Box>
			)}
			<Card sx={{ p: "10px" }}>
				<CardContent>
					<Box ref={ref} sx={{ maxWidth: 600, margin: "0 auto" }}>
						{list.map((el, i) => (
							<Grid
								container
								spacing={3}
								key={i}
								mb={data.questions.length !== i + 1 && 3}
							>
								<Grid item xs={6}>
									<Typography
										variant="h3"
										sx={{
											color: theme.palette.common.blue,
											textAlign: "center",
											margin: "12px 0 0",
											lineHeight: "1em",
										}}
									>
										{el.question} =
									</Typography>
								</Grid>
								<Grid item xs={6}>
									<TextField
										fullWidth
										focused
										color={
											result && el.correct === true
												? "success"
												: result && el.correct === false
												? "error"
												: "primary"
										}
										autoFocus={i === 0}
										onKeyDown={(e) => {
											e.key === "Enter" &&
												e.target?.parentNode?.parentNode?.parentNode?.parentNode?.nextSibling?.lastChild?.lastChild?.lastChild?.firstChild?.focus()
										}}
										onChange={(e) => {
											validator.isNumeric(e.target.value)
												? updateAt(i, {
														...el,
														input: e.target.value,
														correct:
															e.target.value === el.answer ? true : false,
												  })
												: updateAt(i, {
														...el,
														input: null,
														correct: false,
												  })
										}}
										value={el.input || ""}
										error={result && !el.correct}
										helperText={
											result &&
											el.correct === false &&
											`Correct Answer: ${el.answer}`
										}
										sx={{
											".MuiFormHelperText-root": { m: "0" },
											"input.MuiInputBase-input": {
												textAlign: "center",
												padding: "5px",
												fontSize: "2rem",
												fontFamily: "Fredoka One",
											},
										}}
									/>
								</Grid>
							</Grid>
						))}
					</Box>
				</CardContent>
			</Card>
			{!result && (
				<Box sx={{ textAlign: "center", mt: "20px" }}>
					{data.type !== "practise" && (
						<Typography sx={{ fontWeight: "bold" }}>
							Time left: {timeLeft / 1000} seconds
						</Typography>
					)}
					<LoadingButton
						loading={isLoading}
						color="primary"
						variant="contained"
						sx={{
							width: "150px",
							fontSize: "16px",
							mt: 2,
						}}
						onClick={() => {
							handleSubmit()
						}}
					>
						SUBMIT
					</LoadingButton>
				</Box>
			)}
		</Box>
	)
}

export default forwardRef(QuizContent)
