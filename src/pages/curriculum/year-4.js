import React from "react"
import { useTheme, Divider, Grid, Typography } from "@mui/material"
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"
import FileOpenIcon from "@mui/icons-material/FileOpen"
import ImageFrame from "src/components/ImageFrame"
import Vimeo from "@u-wave/react-vimeo"

import MainContainer from "src/components/MainContainer"
import Title from "src/components/Title"
import ColorBox from "src/components/ColorBox"
import { maxHeight } from "@mui/system"

//images
import BannerCheck from "public/assets/banners/BannerCheck.png"

const Year4 = () => {
	const theme = useTheme()

	return (
		<MainContainer title="Year 4">
			<Title>Year 4</Title>
			<Divider sx={{ marginBottom: "30px" }} />
			<Grid
				container
				spacing={3}
				sx={{
					marginBottom: "40px",
					display: "flex",
					alignItems: "center",
					textAlign: "center",
				}}
			>
				<Grid item xs={12} md={4}>
					<Typography variant="h5">
						Use this step-by-step ‘Unit Outline’ with your class.
					</Typography>
				</Grid>
				<Grid item xs={12} md={4}>
					<ColorBox
						bg={theme.palette.common.green}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/Year-4-Unit-Planner-Multiplication-Division-Mfacts121-5.19.pdf"
						newTab
					>
						<Typography variant="h5">Unit Outline- PDF</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.green}
						btn={{
							text: "View",
							icon: <FileOpenIcon />,
						}}
						fixedHeight
						href="/assets/docx/Year-4-Unit-Planner-Multiplication-Division-Mfacts121-5.19.docx"
					>
						<Typography variant="h5">Unit Outline- Word Doc</Typography>
					</ColorBox>
				</Grid>
				<Grid item xs={12} md={4}>
					<Typography variant="h6" color="primary">
						Videos For This Year Level
					</Typography>
					<Vimeo video="161279311" responsive />
				</Grid>
			</Grid>

			<Divider sx={{ marginBottom: "30px", marginTop: "-30px" }} />

			<Grid
				container
				spacing={3}
				sx={{
					marginBottom: "40px",
					display: "flex",
					alignItems: "center",
					textAlign: "center",
				}}
			>
				<Grid item xs={12} md={4}>
					<Typography variant="h5">
						Pick and choose your activities, using these quick links.
					</Typography>
				</Grid>
				<Grid item xs={12} md={4}>
					<ColorBox
						bg={theme.palette.common.yellow}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/YEAR-4-Pre-Assessment-TEACHER-TALK-and-MARKING-GUIDE.pdf"
						newTab
					>
						<Typography variant="h5">Pre/Post-Assessment </Typography>
						<Typography variant="body1">
							Assessment Teacher Talk & Marking Guide{" "}
						</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.red}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/4x_Game.docx-1.pdf"
						newTab
					>
						<Typography variant="h5">4 x_Game</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.blue}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/5x_game.docx-1.pdf"
						newTab
					>
						<Typography variant="h5">5 x_Game</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.green}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/6x_game.docx-1.pdf"
						newTab
					>
						<Typography variant="h5">6 x_Game</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.yellow}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/8-x-_-game.docx.docx.pdf"
						newTab
					>
						<Typography variant="h5">8 x_Game</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.red}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/GCTensfactsandFivesfactsGame-1-1.pdf"
						newTab
					>
						<Typography variant="h5">Tens Facts & Five Facts Game</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.blue}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/PaddocksGame-DistributiveProperty-1.pdf"
						newTab
					>
						<Typography variant="h5">Distributive Property</Typography>
						<Typography variant="body1">Paddocks Game</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.green}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/MultiplesGame.docx-1-1.pdf"
						newTab
					>
						<Typography variant="h5">Multiples Game</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.yellow}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/GCStrategyGame.docx-1.pdf"
						newTab
					>
						<Typography variant="h5">Strategy Game</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.red}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/GCMakingConnections.docx-1-2.pdf"
						newTab
					>
						<Typography variant="h5">Making Connections</Typography>
					</ColorBox>
				</Grid>
			</Grid>

			<Divider sx={{ marginBottom: "30px" }} />

			<Typography variant="body1" color="error">
				*This is the suggested year level. Differentiate for your students’
				individual needs using all Mfacts121 Units Of Work and activities.
			</Typography>

			<ImageFrame src={BannerCheck} />
		</MainContainer>
	)
}

export default Year4
