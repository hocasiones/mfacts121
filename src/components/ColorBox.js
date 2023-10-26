import React from "react"
import { useTheme, Paper, Stack, Typography, Button } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import Link from "next/link"

const LinkButton = ({ href, newTab, theme, btn, children }) => {
	if (newTab) {
		return (
			<a href={href} target="_blank" style={{ margin: 0 }}>
				{children}
			</a>
		)
	} else {
		return <Link href={href}>{children}</Link>
	}
}

const ColorBox = ({
	children,
	bg,
	bgImage,
	href,
	newTab,
	btn,
	fixedHeight,
	sx,
}) => {
	const theme = useTheme()

	return (
		<Paper
			elevation={12}
			sx={{
				backgroundColor: bg || theme.palette.common.blue,
				backgroundImage: `url(${bgImage?.src})`,
				backgroundPosition: "center",
				backgroundSize: "contain",
				backgroundRepeat: "repeat-y",
				padding: "40px 20px",
				margin: "0 0 30px",
				textAlign: "center",
				color: theme.palette.common.white,
				height: fixedHeight ? "auto" : "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				paddingBottom: btn ? "40px" : "20px",
				...sx,
			}}
		>
			<Stack spacing={4} alignItems="center">
				<div>{children}</div>
				{btn ? (
					<LinkButton href={href || ""} newTab={newTab} theme={theme} btn={btn}>
						<Button
							variant="contained"
							disableElevation
							endIcon={btn?.icon || <SearchIcon />}
							// color="success"
							sx={{
								boxShadow: "none !important",
								backgroundColor: "#EEE !important",
								margin: "10px 0 0 !important",
								color: theme.palette.common.blue,
							}}
						>
							{btn?.text || "Learn More"}
						</Button>
					</LinkButton>
				) : (
					false
				)}
			</Stack>
		</Paper>
	)
}

export default ColorBox
