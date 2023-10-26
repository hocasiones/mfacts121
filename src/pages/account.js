import {
	Box,
	Divider,
	Stack,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from "@mui/material"
import { useRouter } from "next/router"
import PropTypes from "prop-types"
import React from "react"
import MainContainer from "src/components/MainContainer"
import Title from "src/components/Title"
import AccountDetails from "src/components/account/AccountDetails"
import ChangePassword from "src/components/account/ChangePassword"
import SubscriptionDetails from "src/components/account/SubscriptionDetails"
import userStore from "src/store/userStore"

function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

// TabPanel.propTypes = {
// 	children: PropTypes.node,
// 	index: PropTypes.number.isRequired,
// 	value: PropTypes.number.isRequired,
// }

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	}
}

const Account = () => {
	const [activeTab, setActiveTab] = React.useState(1)
	const userState = userStore()
	const router = useRouter()

	return (
		<MainContainer title="Account">
			<Title>Account</Title>
			<Divider sx={{ marginBottom: "50px" }} />

			<Stack direction="column" spacing={5}>
				<Stack direction="row" justifyContent="center">
					<ToggleButtonGroup
						color="primary"
						onChange={(e, newActive) => setActiveTab(newActive)}
						exclusive
						value={activeTab}
						aria-label="Platform"
					>
						<ToggleButton value={1}>Account Details</ToggleButton>
						<ToggleButton value={2}>Change Password</ToggleButton>
						<ToggleButton value={3}>Subscription Details</ToggleButton>
					</ToggleButtonGroup>
				</Stack>
				{activeTab === 1 && <AccountDetails />}
				{activeTab === 2 && <ChangePassword />}
				{activeTab === 3 && <SubscriptionDetails />}
			</Stack>
		</MainContainer>
	)
}

export default Account

// export async function getServerSideProps(context) {
// 	const session = await unstable_getServerSession(
// 		context.req,
// 		context.res,
// 		authOptions
// 	)

// 	console.log(session)

// 	if (!session) {
// 		return {
// 			redirect: {
// 				destination: "/signin",
// 				permanent: false,
// 			},
// 		}
// 	}

// 	return {
// 		props: {
// 			session: JSON.stringify(session),
// 		},
// 	}
// }
