import { Box, Typography } from "@mui/material"

//nextjs
import Image from "next/image"

//images
import favicon from "public/assets/favicon.png"

const Title = ({ children }) => {
	return (
		<Box sx={{ display: "block", marginBottom: "20px" }}>
			<Image
				src={favicon.src}
				style={{ display: "inline-block", verticalAlign: "0px" }}
				alt=""
				width={favicon.width}
				height={favicon.height}
			/>
			<Typography
				variant="h1"
				component="h1"
				paragraph
				sx={{ display: "inline", marginLeft: "10px" }}
			>
				{children}
			</Typography>
		</Box>
	)
}

export default Title
