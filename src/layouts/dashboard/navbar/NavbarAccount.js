import PropTypes from "prop-types"
import userStore from "src/store/userStore"
import _ from "lodash"
// @mui
import { Box, Link, Stack, Typography, useTheme } from "@mui/material"
import { styled } from "@mui/material/styles"

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(2, 2.5),
	borderRadius: Number(theme.shape.borderRadius) * 1.5,
	backgroundColor: theme.palette.grey[500_12],
	transition: theme.transitions.create("opacity", {
		duration: theme.transitions.duration.shorter,
	}),
}))

// ----------------------------------------------------------------------

NavbarAccount.propTypes = {
	isCollapse: PropTypes.bool,
}

export default function NavbarAccount({ isCollapse }) {
	const theme = useTheme()
	const userState = userStore()

	return (
		<Link underline="none" color="inherit">
			<Box
				sx={{
					background: theme.palette.common.blue,
					color: theme.palette.common.white,
					padding: "10px",
					borderRadius: "10px",
					...(isCollapse && {
						bgcolor: "transparent",
					}),
				}}
			>
				{/* <Avatar src="https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg" alt="Rayan Moran" /> */}

				<Box
					sx={{
						ml: 1,
						transition: (theme) =>
							theme.transitions.create("width", {
								duration: theme.transitions.duration.shorter,
							}),
						...(isCollapse && {
							ml: 0,
							width: 0,
						}),
					}}
				>
					{userState.User?.firstName || userState.User?.lastName ? (
						<Typography variant="h6" sx={{ margin: 0 }}>
							{`${_.capitalize(userState.User.firstName)} ${_.capitalize(
								userState.User.lastName
							)}`}
						</Typography>
					) : (
						false
					)}
					{userState.User?.role && (
						<Typography
							variant="body2"
							noWrap
							sx={{ color: theme.palette.common.white, margin: 0 }}
						>
							{_.capitalize(userState.User.role)}
						</Typography>
					)}
					{userState.User?.school && (
						<Typography
							variant="body2"
							noWrap
							sx={{ color: theme.palette.common.white, margin: 0 }}
						>
							{_.capitalize(userState.User.school)}
						</Typography>
					)}
				</Box>
			</Box>
		</Link>
	)
}
