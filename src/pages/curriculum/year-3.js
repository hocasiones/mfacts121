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

const Year3 = () => {
	const theme = useTheme()

	return (
		<MainContainer title="Year 3">
			<Title>Year 3</Title>
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
						href="/assets/pdf/Year-3-Unit-Planner-Multiplication-Division-5.19.pdf"
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
						href="/assets/docx/Year-3-Unit-Planner-Multiplication-Division-5.19.docx"
						newTab
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
						href="/assets/pdf/YEAR-3-Pre-Assessment.docx-1.pdf"
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
						href="/assets/pdf/Introducing-Rows-of-and-Arrays.pdf"
						newTab
					>
						<Typography variant="h5">{`Intro to "Rows of" & "Arrays"`}</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.red}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/LBMakingArraysGame.docx1_-1.pdf"
						newTab
					>
						<Typography variant="h5">Making Arrays Game</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.red}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/2x_game.docx-1-1-1.pdf"
						newTab
					>
						<Typography variant="h5">2 x_Game</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.red}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/3x_Game.docx-1.pdf"
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
						href="/assets/pdf/LB-#U2018Doubleu2019-or-Double-Plus-One-More-Group-Game.pdf"
						newTab
					>
						<Typography variant="h5">
							{`"Double" of "Double plus one more" Game`}
						</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.red}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/MultiplesGame.docx-3.pdf"
						newTab
					>
						<Typography variant="h5">Multiples Game</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.red}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/LBMakingConnections.docx-1-1.pdf"
						newTab
					>
						<Typography variant="h5">Making Connections</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.red}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						fixedHeight
						href="/assets/pdf/LB2x4PartialArrayTask.docx-1.pdf"
						newTab
					>
						<Typography variant="h5">Partial Array Activities</Typography>
						<Typography variant="body1">3×5 2×4 3×3</Typography>
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

export default Year3
