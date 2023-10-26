import PropTypes from "prop-types"
import { useEffect } from "react"
// next
import { useRouter } from "next/router"
// @mui
import { Box, Drawer, Stack } from "@mui/material"
import { styled, useTheme } from "@mui/material/styles"
// hooks
import useCollapseDrawer from "../../../hooks/useCollapseDrawer"
import useResponsive from "../../../hooks/useResponsive"
// utils
import cssStyles from "../../../utils/cssStyles"
// config
import { NAVBAR } from "../../../config"
// components
import Logo from "../../../components/Logo"
import { NavSectionVertical } from "../../../components/nav-section"
import Scrollbar from "../../../components/Scrollbar"
//
import NavbarAccount from "./NavbarAccount"
import useNavConfig from "./NavConfig"
//store
import userStore from "src/store/userStore"

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
	[theme.breakpoints.up("lg")]: {
		flexShrink: 0,
		transition: theme.transitions.create("width", {
			duration: theme.transitions.duration.shorter,
		}),
	},
}))

// ----------------------------------------------------------------------

NavbarVertical.propTypes = {
	isOpenSidebar: PropTypes.bool,
	onCloseSidebar: PropTypes.func,
}

export default function NavbarVertical({ isOpenSidebar, onCloseSidebar }) {
	const theme = useTheme()
	const userState = userStore()
	const router = useRouter()

	const nav = useNavConfig()

	const isDesktop = useResponsive("up", "lg")

	const Nav = () => {
		if (userState.User?.role === "schooladmin") return nav.schoolNav
		if (userState.User?.role === "teacher") return nav.teacherNav
		if (userState.User?.role === "student") return nav.studentNav
		return nav.adminNav
	}

	const {
		isCollapse,
		collapseClick,
		collapseHover,
		onToggleCollapse,
		onHoverEnter,
		onHoverLeave,
	} = useCollapseDrawer()

	useEffect(() => {
		if (isOpenSidebar) {
			onCloseSidebar()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.pathname])

	const renderContent = (
		<Scrollbar
			sx={{
				height: 1,
				"& .simplebar-content": {
					height: 1,
					display: "flex",
					flexDirection: "column",
				},
			}}
		>
			<Stack
				spacing={3}
				sx={{
					pt: 3,
					pb: 2,
					px: 2.5,
					flexShrink: 0,
					...(isCollapse && { alignItems: "center" }),
				}}
			>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
				>
					<Logo />

					{/* {isDesktop && !isCollapse && (
            <CollapseButton onToggleCollapse={onToggleCollapse} collapseClick={collapseClick} />
          )} */}
				</Stack>

				<NavbarAccount isCollapse={isCollapse} />
			</Stack>

			<NavSectionVertical navConfig={Nav()} isCollapse={isCollapse} />

			<Box sx={{ flexGrow: 1 }} />

			{/* {!isCollapse && <NavbarDocs />} */}
		</Scrollbar>
	)

	return (
		<RootStyle
			sx={{
				width: {
					lg: isCollapse
						? NAVBAR.DASHBOARD_COLLAPSE_WIDTH
						: NAVBAR.DASHBOARD_WIDTH,
				},
				...(collapseClick && {
					position: "absolute",
				}),
			}}
		>
			{!isDesktop && (
				<Drawer
					open={isOpenSidebar}
					onClose={onCloseSidebar}
					PaperProps={{ sx: { width: NAVBAR.DASHBOARD_WIDTH } }}
				>
					{renderContent}
				</Drawer>
			)}

			{isDesktop && (
				<Drawer
					open
					variant="persistent"
					onMouseEnter={onHoverEnter}
					onMouseLeave={onHoverLeave}
					PaperProps={{
						sx: {
							width: NAVBAR.DASHBOARD_WIDTH,
							borderRightStyle: "dashed",
							bgcolor: "background.default",
							transition: (theme) =>
								theme.transitions.create("width", {
									duration: theme.transitions.duration.standard,
								}),
							...(isCollapse && {
								width: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
							}),
							...(collapseHover && {
								...cssStyles(theme).bgBlur(),
								boxShadow: (theme) => theme.customShadows.z24,
							}),
						},
					}}
				>
					{renderContent}
				</Drawer>
			)}
		</RootStyle>
	)
}
