//components
import MainContainer from "src/components/MainContainer"
import Title from "src/components/Title"
import userStore from "src/store/userStore"
import AvatarDialog from "src/components/avatars/AvatarDialog"
import { Paper, Grid, Typography, Divider, useTheme } from "@mui/material"
import StudentDashboard from "src/components/dashboard/StudentDashboard"
import { useEffect, useState } from "react"

const Dashboard = () => {
	const userState = userStore()
	const theme = useTheme()
	const [dialogState, setDialogState] = useState(false)

	useEffect(() => {
		if (!userState.User?.avatar) {
			setDialogState(true)
		}
	}, [userState.User?.avatar])

	return (
		<MainContainer title="Dashboard">
			<AvatarDialog dialogState={dialogState} setDialogState={setDialogState} />
			{userState.User?.role === "Student" && <StudentDashboard />}
		</MainContainer>
	)
}

export default Dashboard
