import QuizMain from "src/components/quiz/Main"

const Practise = ({ pageID }) => {
	return <QuizMain pageID={pageID} type="practise" />
}

export default Practise

export const getServerSideProps = async (context) => {
	return {
		props: {
			pageID: context.query.id,
		},
	}
}
