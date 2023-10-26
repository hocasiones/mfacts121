import {
	Avatar,
	Button,
	Grid,
	Stack,
	Typography,
	useTheme,
} from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import userStore from "src/store/userStore"

//components
import Popup from "src/components/Popup"

//avatar images
import ky from "ky"
import avatar1 from "public/assets/avatars/avatar-1.png"
import avatar10 from "public/assets/avatars/avatar-10.png"
import avatar11 from "public/assets/avatars/avatar-11.png"
import avatar12 from "public/assets/avatars/avatar-12.png"
import avatar13 from "public/assets/avatars/avatar-13.png"
import avatar14 from "public/assets/avatars/avatar-14.png"
import avatar15 from "public/assets/avatars/avatar-15.png"
import avatar16 from "public/assets/avatars/avatar-16.png"
import avatar2 from "public/assets/avatars/avatar-2.png"
import avatar3 from "public/assets/avatars/avatar-3.png"
import avatar4 from "public/assets/avatars/avatar-4.png"
import avatar5 from "public/assets/avatars/avatar-5.png"
import avatar6 from "public/assets/avatars/avatar-6.png"
import avatar7 from "public/assets/avatars/avatar-7.png"
import avatar8 from "public/assets/avatars/avatar-8.png"
import avatar9 from "public/assets/avatars/avatar-9.png"
import { account, database } from "src/appwrite/config"
// import avatar17 from 'public/assets/avatars/avatar-17.png';

const avatars = [
	avatar1,
	avatar2,
	avatar3,
	avatar4,
	avatar5,
	avatar6,
	avatar7,
	avatar8,
	avatar9,
	avatar10,
	avatar11,
	avatar12,
	avatar13,
	avatar14,
	avatar15,
	avatar16,
]

const AvatarDialog = ({ dialogState, setDialogState, userQuery }) => {
	const theme = useTheme()
	const userState = userStore()
	const [selectedAvatar, setSelectedAvatar] = useState(null)

	//mutation to update user avatar
	const mutation = useMutation({
		mutationFn: async () => {
			// return await account.updatePrefs({
			// 	...userState.User.prefs,
			// 	avatar: selectedAvatar,
			// })
			return await database.updateDocument(
				"main",
				"users",
				userState.User.$id,
				{
					avatar: JSON.stringify(selectedAvatar),
				}
			)
		},
		onSuccess: async (data) => {
			userState.setUser(data)
			userQuery.refetch()
			userState.setNotice({
				enable: true,
				color: "success",
				message: "Successfully selected an avatar",
			})
		},
		onError: (error) => {
			console.log(error)
		},
	})

	return (
		<Popup
			open={dialogState}
			width="md"
			title="Select an Avatar"
			actions={
				<Stack direction="row" spacing={2}>
					<Button
						onClick={() => {
							setDialogState(false)
						}}
					>
						Choose Later
					</Button>
					<Button
						variant="contained"
						disabled={selectedAvatar === null}
						onClick={() => {
							mutation.mutate()
							setDialogState(false)
						}}
					>
						Submit
					</Button>
				</Stack>
			}
		>
			<Grid container spacing={4}>
				{avatars.map((avatar, index) => (
					<Grid item xs={4} sm={3} md={2} key={index}>
						<Stack alignItems="center">
							<Avatar
								alt="Test"
								src={avatar.src}
								sx={{
									width: "100px",
									height: "100px",
									border: `3px solid ${
										avatar === selectedAvatar
											? theme.palette.common.green
											: "white"
									}`,
									cursor: "pointer",
								}}
								onClick={() => setSelectedAvatar(avatar)}
							/>
						</Stack>
					</Grid>
				))}
			</Grid>
		</Popup>
	)
}

export default AvatarDialog
