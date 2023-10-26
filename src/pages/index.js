import { useRouter } from "next/router"
import React from "react"

// ----------------------------------------------------------------------

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Index(props) {
	const router = useRouter()

	// useEffect(() => {
	//   if (router.pathname == '/') {
	//     router.push('/dashboard');
	//   }
	// });

	return <React.Fragment>Test</React.Fragment>
}
