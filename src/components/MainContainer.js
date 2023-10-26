import { Container } from "@mui/material"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useIdle, useLocalStorage } from "react-use"
import Layouts from "src/layouts"
import userStore from "src/store/userStore"
import Page from "./Page"
import { account } from "src/appwrite/config"

// const getSession = async (sessionId) => {
// 	if (!sessionId) return await false
// 	return await account.getSession(sessionId)
// }

const MainContainer = ({ children, title, maxWidth }) => {
	const router = useRouter()
	const userState = userStore()
	// const isIdle = useIdle(60000 * 90)
	// const [storageState, setStorageState] = useLocalStorage("userState")

	// redirect if not authenticated
	useEffect(() => {
		if (!userState.Auth || !userState.User) {
			router.push("/signin")
		}

		// const session = getSession(userState?.Auth.$id)
		// session
		// 	.then((res) => {
		// 		// console.log(res)
		// 	})
		// 	.catch((err) => {
		// 		console.log(err)
		// 		router.push("/signin")
		// 	})
	}, [userState, router])

	//idle sign out (90 mins) and session expires
	// useEffect(() => {
	// 	const currDateTime = new Date().getTime()
	// 	const dateTime = session?.expires
	// 		? new Date(session.expires).getTime()
	// 		: 99999999999999999
	// 	if (isIdle || currDateTime > dateTime) {
	// 		console.log("idle sign out")

	// 	}
	// }, [isIdle])

	return (
		<>
			<Layouts>
				<Page title={title} sx={{ height: "100%" }}>
					<Container maxWidth={maxWidth || "xl"} sx={{ height: "100%" }}>
						{children}
					</Container>
				</Page>
			</Layouts>
		</>
	)
}

export default MainContainer
