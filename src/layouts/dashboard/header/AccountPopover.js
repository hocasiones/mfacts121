import { useEffect, useState } from "react"
import {
	Avatar,
	Box,
	Divider,
	MenuItem,
	Popover,
	Stack,
	Typography,
} from "@mui/material"
import Fab from "@mui/material/Fab"
import _ from "lodash"
import NextLink from "next/link"
import userStore from "src/store/userStore"
import { account } from "src/appwrite/config"
import { useRouter } from "next/router"

// ----------------------------------------------------------------------

export default function AccountPopover() {
	const userState = userStore()
	const [imageSRC, setImageSRC] = useState(null)
	const router = useRouter()
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	useEffect(() => {
		if (userState?.User?.avatar) {
			setImageSRC(JSON.parse(userState?.User?.avatar).src)
		}
	}, [userState?.User?.avatar])

	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handlePopoverClose = () => {
		setAnchorEl(null)
	}

	return (
		<>
			<Fab
				color="secondary"
				size="small"
				onClick={handlePopoverOpen}
				sx={{ cursor: "pointer" }}
			>
				<Avatar
					src={imageSRC || null}
					alt={`${userState?.User?.firstName} ${userState?.User?.lastName}`}
				/>
			</Fab>
			<Popover
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={open}
				anchorEl={anchorEl}
				onClose={handlePopoverClose}
			>
				<Box sx={{ my: 1.5, px: 2.5 }}>
					<Typography variant="subtitle2" noWrap>
						{_.upperFirst(userState.User?.firstName)}{" "}
						{_.upperFirst(userState.User?.lastName)}
					</Typography>
					<Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
						{userState.User?.email}
					</Typography>
				</Box>

				<Divider sx={{ borderStyle: "dashed" }} />

				<Stack sx={{ p: 1 }}>
					<NextLink href={`/account`} passHref>
						<MenuItem sx={{ margin: "0 !important" }}>Account</MenuItem>
					</NextLink>
				</Stack>

				<Divider sx={{ borderStyle: "dashed" }} />

				<MenuItem
					onClick={() => {
						account
							.deleteSession(userState?.Auth.$id)
							.then(() => {
								router.push("/signin")
								userState.setAuth(null)
								userState.setUser(null)
							})
							.catch((error) => {
								console.log(error)
							})
					}}
					sx={{ m: 1 }}
				>
					Logout
				</MenuItem>
			</Popover>
		</>
	)
}
