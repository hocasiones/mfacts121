import QuizMain from "src/components/quiz/Main"

const Quiz = ({ pageID }) => {
	return <QuizMain pageID={pageID} type="assessment" />
}

export default Quiz

export const getServerSideProps = async (context) => {
	return {
		props: {
			pageID: context.query.id,
		},
	}
}
