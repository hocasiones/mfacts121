import React from "react"
import { useTheme, Divider, Grid, Typography } from "@mui/material"
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"

//components
import MainContainer from "src/components/MainContainer"
import Title from "src/components/Title"
import ColorBox from "src/components/ColorBox"
import ImageFrame from "src/components/ImageFrame"

//images
import image1 from "public/assets/others/PPoint-Pres-IMAGE-1.png"

const ParentsAsPartners = () => {
	const theme = useTheme()

	return (
		<MainContainer title="Parents As Partners">
			<Title>Parents As Partners</Title>
			<Divider sx={{ marginBottom: "50px" }} />
			<Grid
				container
				spacing={3}
				sx={{
					marginBottom: "20px",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Grid item xs={12} md={4}>
					<ColorBox
						bg={theme.palette.common.green}
						fixedHeight
						btn={{ text: "View", icon: <PictureAsPdfIcon /> }}
						href="/assets/pdf/ParentLetterMultiplicationFactsMfacts121.doc-1.pdf"
						newTab
					>
						<Typography variant="h4">Parent Letter</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.red}
						fixedHeight
						btn
						href="/videos/parent-videos/"
					>
						<Typography variant="h4">Parent Videos</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.blue}
						fixedHeight
						btn
						href="/assets/pdf/IdeasforHome.docx-1.pdf"
						newTab
					>
						<Typography variant="h4">Ideas for Home</Typography>
					</ColorBox>
					<ColorBox bg={theme.palette.common.blue} fixedHeight href="/">
						<Typography variant="h5">
							Powerpoint Presentation-Learning the Multiplication Facts (parent
							information sessions)
						</Typography>
					</ColorBox>
				</Grid>
				<Grid item xs={12} md={6}>
					<ImageFrame src={image1} />
				</Grid>
			</Grid>
		</MainContainer>
	)
}

export default ParentsAsPartners
