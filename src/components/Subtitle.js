import React from "react"
import { Box, Typography } from "@mui/material"

//nextjs
import Image from "next/image"

//images
import favicon from "public/assets/favicon.png"

const Subtitle = ({ children, variant }) => {
	return (
		<Box sx={{ display: "block", marginBottom: "20px" }}>
			<Image
				src={favicon}
				layout="fixed"
				width={favicon.width}
				height={favicon.height}
				style={{ display: "inline-block", verticalAlign: "middle" }}
				alt="favicon"
			/>
			<Typography
				variant={variant || "h4"}
				component="h2"
				paragraph
				sx={{ display: "inline", marginLeft: "10px" }}
			>
				{children}
			</Typography>
		</Box>
	)
}

export default Subtitle
