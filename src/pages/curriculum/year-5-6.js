import React from "react"
import { useTheme, Divider, Grid, Typography, Stack } from "@mui/material"
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

const Year5_6 = () => {
	const theme = useTheme()

	return (
		<MainContainer title="Year 5/6">
			<Title>Year 5/6</Title>
			<Divider sx={{ marginBottom: "30px" }} />
			<Grid
				container
				spacing={3}
				sx={{
					marginBottom: "40px",
					display: "flex",
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
						href="/assets/pdf/Year56UnitPlannerMultiplicationDivisionMfacts121-5.19-2.pdf"
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
						href="/assets/docx/Year56UnitPlannerMultiplicationDivisionMfacts121-5.19-2.docx"
					>
						<Typography variant="h5">Unit Outline- Word Doc</Typography>
					</ColorBox>
				</Grid>
				<Grid item xs={12} md={4}>
					<Typography variant="h6" color="primary">
						Videos For This Year Level
					</Typography>
					<Vimeo video="179446233" responsive />
				</Grid>
			</Grid>

			<Divider sx={{ marginBottom: "30px", marginTop: "-30px" }} />

			<Grid
				container
				spacing={3}
				sx={{
					marginBottom: "40px",
					display: "flex",
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
						href="/assets/pdf/YEAR-5-6-Pre-Assessment.docx.pdf"
						newTab
					>
						<Typography variant="h5">Pre/Post-Assessment </Typography>
						<Typography variant="body1">
							Teacher Talk & Marking Guide
						</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.red}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/7-x-_-game.docx.docx.pdf"
						newTab
					>
						<Typography variant="h5">7 x_Game</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.blue}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/8-x-_-game.docx.docx-1.pdf"
						newTab
					>
						<Typography variant="h5">8 x_Game</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.green}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/9x_game.docx-1-1.pdf"
						newTab
					>
						<Typography variant="h5">9 x_Game</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.yellow}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/Year-3-Unit-Planner-Multiplication-Division...docx.pdf"
						newTab
					>
						<Typography variant="h5">3 x_Game</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.red}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/CTensfactsandFivesfactsGame-1.pdf"
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
						href="/assets/pdf/CPaddocksGame-DistributiveProperty-1.pdf"
						newTab
					>
						<Typography variant="h5">Paddocks Game</Typography>
						<Typography variant="body1">Distributive Property</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.green}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/MultiplesGame.docx-2-1.pdf"
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
						href="/assets/pdf/CStrategyGame.docx-1.pdf"
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
						href="/assets/pdf/GCMakingConnections.docx-1-1-1.pdf"
						newTab
					>
						<Typography variant="h5">Making Connections</Typography>
					</ColorBox>
				</Grid>
				<Grid item xs={12} md={4}>
					<Typography variant="h6" color="primary">
						Pick and choose your activities, using these quick links.
					</Typography>
					<Stack spacing={4}>
						<Vimeo video="179446233" responsive />
						<Vimeo video="165534003" responsive />
						<Vimeo video="167376139" responsive />
						<Vimeo video="161280365" responsive />
						<Vimeo video="168136062" responsive />
						<Vimeo video="161280089" responsive />
						<Vimeo video="166610648" responsive />
					</Stack>
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

export default Year5_6
