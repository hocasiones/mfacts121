import { Box, Stack } from "@mui/material"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useRef, useState } from "react"
import useCountDown from "react-countdown-hook"
import { useList } from "react-use"
import MainContainer from "src/components/MainContainer"
import QuizContent from "src/components/quiz/Content"
import QuizContinue from "src/components/quiz/Continue"
import QuizIntro from "src/components/quiz/Intro"
import QuizResults from "src/components/quiz/Result"
import _ from "lodash"
import Title from "src/components/Title"
import userStore from "src/store/userStore"
import { database, ID } from "src/appwrite/config"

const QuizMain = ({ pageID, type }) => {
	const userState = userStore()

	const [data, setData] = useState([])
	const [intro, setIntro] = useState(true)
	const [content, setContent] = useState(false)
	const [result, setResult] = useState(false)

	const [score, setScore] = useState(null)
	const [mistakes, setMistakes] = useState(null)
	const [timeFinished, setTimeFinished] = useState(null)

	const [list, { set: setList, updateAt }] = useList([])

	const [timeLeft, { start, pause, reset }] = useCountDown(60, 1000)

	const quizRef = useRef()
	const resultRef = useRef()

	const router = useRouter()

	//query data
	useQuery({
		queryKey: ["quiz"],
		queryFn: async () => {
			return await database.getDocument("main", "assessments", pageID)
		},
		onSuccess: (data) => {
			setData({ ...data, questions: JSON.parse(data.questions) })
			setList(JSON.parse(data.questions))
		},
		onError: (error) => {
			console.log("error", error)
		},
		refetchOnMount: false,
		refetchOnWindowFocus: false,
	})

	const mutation = useMutation({
		mutationFn: async (dataToSubmit) => {
			const res = await database.createDocument(
				"main",
				"quizzes",
				ID.unique(),
				dataToSubmit
			)

			// record achievement
			if (res.score >= data.passingScore) {
				await database.createDocument("main", "achievements", ID.unique(), {
					name: data.name,
					type: type,
					users: userState.User.$id,
					points: 5,
				})
			}

			return {}
		},
		onSuccess: () => {
			reset()
			setResult(true)
			userState.setNotice({ enable: true, message: "Successfully Submitted" })
			window.scrollTo(0, 0) //scroll to top
		},
		onError: () => {
			userState.setNotice({
				enable: true,
				message: "Something went wrong! Please try again.",
				color: "error",
			})
		},
	})

	const handleSubmit = async () => {
		pause()
		const s = list.filter((el) => el.correct === true).length
		const m = list.filter((el) => el.correct !== true).length
		const t =
			data.duration === 0
				? 999 - timeLeft / 1000
				: data.duration - timeLeft / 1000
		setScore(s)
		setMistakes(m)
		setTimeFinished(t)
		mutation.mutate({
			userId: userState.User.$id,
			assessmentID: router.query.id,
			assessmentName: data.name,
			type: data.type,
			totalItems: data.questions.length,
			score: s,
			mistakes: m,
			timeFinished: t,
			qa: JSON.stringify(list),
		})
	}

	const handleRetake = () => {
		setIntro(true)
		setContent(false)
		setResult(false)
		setScore(null)
		setMistakes(null)
		setTimeFinished(null)
		setList(data.questions)
	}

	return (
		<MainContainer title="Online Assessment" maxWidth="md">
			<Stack
				justifyContent="center"
				alignItems="center"
				sx={{ width: "100%", height: "100%" }}
			>
				<Box sx={{ width: "100%" }}>
					<Box sx={{ textAlign: "center" }}>
						<Title>
							Online {`${_.capitalize(data.type)}`} - {data.name}
						</Title>
					</Box>
					{intro && (
						<QuizIntro
							data={data}
							setIntro={setIntro}
							setContent={setContent}
							startTimer={start}
						/>
					)}
					{result && (
						<QuizResults
							ref={resultRef}
							data={data}
							list={list}
							resultRef={resultRef}
							timeLeft={timeLeft}
							score={score}
							mistakes={mistakes}
							timeFinished={timeFinished}
							userState={userState}
							router={router}
						/>
					)}
					{result && (
						<QuizContinue
							data={data}
							handleRetake={handleRetake}
							score={score}
						/>
					)}
					{content && (
						<QuizContent
							data={data}
							ref={quizRef}
							list={list}
							updateAt={updateAt}
							result={result}
							handleSubmit={handleSubmit}
							timeLeft={timeLeft}
							isLoading={mutation.isLoading}
						/>
					)}
					{result && (
						<QuizContinue
							data={data}
							handleRetake={handleRetake}
							score={score}
						/>
					)}
				</Box>
			</Stack>
		</MainContainer>
	)
}

export default QuizMain
