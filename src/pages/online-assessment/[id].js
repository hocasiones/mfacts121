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
import ky from "ky"
import _ from "lodash"
import Title from "src/components/Title"
import userStore from "src/store/userStore"
import { database, ID } from "src/appwrite/config"

const Quiz = ({ pageID }) => {
	const [data, setData] = useState([])
	const [intro, setintro] = useState(true)
	const [content, setcontent] = useState(false)
	const [result, setresult] = useState(false)

	const [score, setscore] = useState(null)
	const [mistakes, setmistakes] = useState(null)
	const [timeFinished, setTimeFinished] = useState(null)

	const [list, { set: setList, updateAt, reset: resetList }] = useList([])

	const [timeLeft, { start, pause, resume, reset }] = useCountDown(60, 1000)

	const quizRef = useRef()
	const resultRef = useRef()

	const router = useRouter()
	// useEffect(() => {
	//   console.log(router.query.id);
	// }, [router.query.id]);

	//query data
	const queriedData = useQuery({
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

	// useEffect(() => {
	//   console.log(data);
	// }, [data]);

	const userState = userStore()
	const mutation = useMutation({
		mutationFn: async (dataToSubmit) => {
			return await database.createDocument(
				"main",
				"quizzes",
				ID.unique(),
				dataToSubmit
			)
		},
		onSuccess: () => {
			reset()
			setresult(true)
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
		const t = data.duration - timeLeft / 1000
		setscore(s)
		setmistakes(m)
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
		setintro(true)
		setcontent(false)
		setresult(false)
		setscore(null)
		setmistakes(null)
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
							setintro={setintro}
							setcontent={setcontent}
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
							setresult={setresult}
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

export default Quiz

export const getServerSideProps = async (context) => {
	return {
		props: {
			pageID: context.query.id,
		},
	}
}
