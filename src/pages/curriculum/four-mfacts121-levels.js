import React from "react"
import { useTheme, Divider, Grid, Typography } from "@mui/material"
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"

//components
import MainContainer from "src/components/MainContainer"
import Subtitle from "src/components/Subtitle"
import Title from "src/components/Title"
import ImageFrame from "src/components/ImageFrame"
import ColorBox from "src/components/ColorBox"

//images
import image1 from "public/assets/others/Facts-Sheets-IMAGE-1.png"
import image2 from "public/assets/others/P4030192-1-1.png"
import image3 from "public/assets/others/compress-6.png"
import multicolor from "public/assets/multicolor.png"

const FourMfacts121Levels = () => {
	const theme = useTheme()

	return (
		<MainContainer title="Four Mfacts121 Levels">
			<Title>Four Mfacts121 Levels</Title>
			<Divider sx={{ marginBottom: "30px" }} />

			<Typography variant="body1">
				We have divided the 121 Multiplication Facts (times tables) into four
				levels.
			</Typography>
			<Typography variant="body1">
				-The four levels are based on strategies, no longer in ‘tables format’.
			</Typography>
			<Typography variant="body1">
				-Students will work through each level, testing themselves on the ONLINE
				TESTING TOOL before they progress to the next level.
			</Typography>
			<Typography variant="body1">
				-APPRENTICE LEVEL begin learning new strategies.
			</Typography>
			<Typography variant="body1">
				-MASTER LEVEL use strategies with larger numbers.
			</Typography>
			<Typography variant="body1">
				-FACTS SHEETS and PLAYING CARDS are printed for each student to take
				home as they make their way through the Mfacts121 program.
			</Typography>
			<Typography variant="body1">
				-The PRACTISE CARDS are used in class for students to practise and track
				their progress through a level.
			</Typography>

			<Grid
				container
				spacing={3}
				sx={{ marginBottom: "20px", marginTop: "40px" }}
			>
				<Grid item xs={12} md={4}>
					<Subtitle>Facts Sheets</Subtitle>
					<ImageFrame src={image1} />
				</Grid>
				<Grid item xs={12} md={4}>
					<Subtitle>Playing Cards </Subtitle>
					<ImageFrame src={image2} />
				</Grid>
				<Grid item xs={12} md={4}>
					<Subtitle>Practise Cards</Subtitle>
					<ImageFrame src={image3} />
				</Grid>
			</Grid>

			<Grid
				container
				spacing={3}
				sx={{ marginBottom: "20px", display: "flex", alignItems: "center" }}
			>
				<Grid item xs={12} md={4}>
					<ColorBox
						bg={theme.palette.common.grey}
						btn={{ text: "View", icon: <PictureAsPdfIcon /> }}
						fixedHeight
						href="/assets/pdf/Mfacts121-Four-Levels-FACTS-SHEETS-colour-2.0.pdf"
						newTab
					>
						<Typography variant="h5">Four Levels- Facts Sheets</Typography>
						<Typography sx={{ fontSize: "14px" }}>
							Full set of Four Levels Facts Sheets ready to print out for your
							class. COLOUR
						</Typography>
					</ColorBox>
				</Grid>
				<Grid item xs={12} md={4}>
					<ColorBox
						bg={theme.palette.common.red}
						btn={{ text: "View", icon: <PictureAsPdfIcon /> }}
						href="/assets/pdf/PlayingCardsLevel1-REDApprentice.docx-1.pdf"
						newTab
						fixedHeight
					>
						<Typography variant="h5">Red Apprentice</Typography>
						<Typography>Level 1 - Playing Cards</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.red}
						btn={{ text: "View", icon: <PictureAsPdfIcon /> }}
						href="/assets/pdf/PlayingCardsLevel1-REDMaster.docx-1.pdf"
						newTab
						fixedHeight
					>
						<Typography variant="h5">Red Master</Typography>
						<Typography>Level 1 - Playing Cards</Typography>
					</ColorBox>
				</Grid>
				<Grid item xs={12} md={4}>
					<ColorBox
						bg={theme.palette.common.red}
						btn={{ text: "View", icon: <PictureAsPdfIcon /> }}
						href="/assets/pdf/Practise-Card-Level-1-RED-Apprentice.docx-1.pdf"
						newTab
						fixedHeight
					>
						<Typography variant="h5">Red Apprentice</Typography>
						<Typography>Level 1 - Playing Cards</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.red}
						btn={{ text: "View", icon: <PictureAsPdfIcon /> }}
						href="/assets/pdf/Practise-Card-Level-1-RED-Master.docx-1.pdf"
						newTab
						fixedHeight
					>
						<Typography variant="h5">Red Master</Typography>
						<Typography>Level 1 - Playing Cards</Typography>
					</ColorBox>
				</Grid>
			</Grid>

			<Grid
				container
				spacing={3}
				sx={{ marginBottom: "20px", display: "flex", alignItems: "center" }}
			>
				<Grid item xs={12} md={4}>
					<ColorBox
						bg={theme.palette.common.grey}
						btn={{ text: "View", icon: <PictureAsPdfIcon /> }}
						href="/assets/pdf/Mfacts121-Four-Levels-FACTS-SHEETS-black-and-white-2.0.pdf"
						newTab
					>
						<Typography variant="h5">Four Levels- Facts Sheets</Typography>
						<Typography sx={{ fontSize: "14px" }}>
							Full set of Four Levels Facts Sheets ready to print out for your
							class. BLACK & WHITE
						</Typography>
					</ColorBox>
				</Grid>
				<Grid item xs={12} md={4}>
					<ColorBox
						bg={theme.palette.common.green}
						btn={{ text: "View", icon: <PictureAsPdfIcon /> }}
						fixedHeight
						href="/assets/pdf/PlayingCardsLevel2-GREENApprentice.docx-1-1.pdf"
						newTab
					>
						<Typography variant="h5">Green Apprentice</Typography>
						<Typography>Level 2 - Playing Cards</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.green}
						btn={{ text: "View", icon: <PictureAsPdfIcon /> }}
						href="/assets/pdf/PlayingCardsLevel2-GREENMaster.docx-1.pdf"
						newTab
						fixedHeight
					>
						<Typography variant="h5">Green Master</Typography>
						<Typography>Level 2 - Playing Cards</Typography>
					</ColorBox>
				</Grid>
				<Grid item xs={12} md={4}>
					<ColorBox
						bg={theme.palette.common.green}
						btn={{ text: "View", icon: <PictureAsPdfIcon /> }}
						href="/assets/pdf/Practise-Card-Level-2-GREEN-Apprentice.docx-1.pdf"
						newTab
						fixedHeight
					>
						<Typography variant="h5">Green Apprentice</Typography>
						<Typography>Level 2 - Playing Cards</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.green}
						btn={{ text: "View", icon: <PictureAsPdfIcon /> }}
						href="/assets/pdf/Practise-Card-Level-2-GREEN-Master.docx-1.pdf"
						newTab
						fixedHeight
					>
						<Typography variant="h5">Green Apprentice</Typography>
						<Typography>Level 2 - Playing Cards</Typography>
					</ColorBox>
				</Grid>
			</Grid>

			<Grid
				container
				spacing={3}
				sx={{ marginBottom: "20px", display: "flex", alignItems: "center" }}
			>
				<Grid item xs={12} md={4}>
					<ColorBox
						bg={theme.palette.common.grey}
						btn={{ text: "View", icon: <PictureAsPdfIcon /> }}
						href="/assets/pdf/Mfacts121-Levels-and-Strategies-Teacher-Checklist-2019.pdf"
						newTab
					>
						<Typography variant="h5">
							Levels and Strategies Teacher Checklist
						</Typography>
						<Typography sx={{ fontSize: "14px" }}>
							A simple way to keep track the strategies each student is working
							on.
						</Typography>
					</ColorBox>
				</Grid>
				<Grid item xs={12} md={4}>
					<ColorBox
						bg={theme.palette.common.blue}
						btn={{ text: "View", icon: <PictureAsPdfIcon /> }}
						href="/assets/pdf/PlayingCardsLevel3-YELLOWApprentice.docx-1.pdf"
						newTab
						fixedHeight
					>
						<Typography variant="h5">Blue Apprentice</Typography>
						<Typography>Level 1 - Playing Cards</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.blue}
						btn={{ text: "View", icon: <PictureAsPdfIcon /> }}
						href="/assets/pdf/PlayingCardsLevel3-YELLOWMaster.docx-1-1.pdf"
						newTab
						fixedHeight
					>
						<Typography variant="h5">Blue Master</Typography>
						<Typography>Level 2 - Playing Cards</Typography>
					</ColorBox>
				</Grid>
				<Grid item xs={12} md={4}>
					<ColorBox
						bg={theme.palette.common.blue}
						btn={{ text: "View", icon: <PictureAsPdfIcon /> }}
						href="/assets/pdf/Practise-Card-Level-3-YELLOW-Apprentice.docx-1.pdf"
						newTab
						fixedHeight
					>
						<Typography variant="h5">Blue Apprentice</Typography>
						<Typography>Level 1 - Playing Cards</Typography>
					</ColorBox>
					<ColorBox
						bg={theme.palette.common.blue}
						btn={{ text: "View", icon: <PictureAsPdfIcon /> }}
						href="/assets/pdf/Practise-Card-Level-3-YELLOW-Master.docx-1.pdf"
						newTab
						fixedHeight
					>
						<Typography variant="h5">Blue Apprentice</Typography>
						<Typography>Level 2 - Playing Cards</Typography>
					</ColorBox>
				</Grid>
			</Grid>

			<Grid
				container
				spacing={3}
				sx={{ marginBottom: "20px", display: "flex", justifyContent: "end" }}
			>
				<Grid item xs={12} md={4}>
					<ColorBox
						bgImage={multicolor}
						bg={theme.palette.common.blue}
						btn={{ text: "View", icon: <PictureAsPdfIcon /> }}
						href="/assets/pdf/PractiseCardMulticolourApprentice.docx-1.pdf"
						newTab
						fixedHeight
					>
						<Typography variant="h5">Multi-Colour Apprentice</Typography>
						<Typography>Practise Cards</Typography>
					</ColorBox>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={3}
				sx={{ marginBottom: "20px", display: "flex", justifyContent: "end" }}
			>
				<Grid item xs={12} md={4}>
					<ColorBox
						bgImage={multicolor}
						bg={theme.palette.common.blue}
						btn={{ text: "View", icon: <PictureAsPdfIcon /> }}
						href="/assets/pdf/PractiseCardMulticolourMaster.docx-1.pdf"
						newTab
						fixedHeight
					>
						<Typography variant="h5">Multi-Colour Master</Typography>
						<Typography>Practise Cards</Typography>
					</ColorBox>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={3}
				sx={{ marginBottom: "20px", display: "flex", justifyContent: "end" }}
			>
				<Grid item xs={12} md={4}>
					<ColorBox
						bg={theme.palette.common.orange}
						btn={{ text: "View", icon: <PictureAsPdfIcon /> }}
						href="/assets/pdf/Division-Apprentice-PRACTICE-CARD.pdf"
						newTab
						fixedHeight
					>
						<Typography variant="h5">Division Apprentice</Typography>
						<Typography>Practise Cards</Typography>
					</ColorBox>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={3}
				sx={{ marginBottom: "20px", display: "flex", justifyContent: "end" }}
			>
				<Grid item xs={12} md={4}>
					<ColorBox
						bg={theme.palette.common.purple}
						btn={{ text: "View", icon: <PictureAsPdfIcon /> }}
						href="/assets/pdf/Division-Master-PRACTICE-CARDS.pdf"
						newTab
						fixedHeight
					>
						<Typography variant="h5">Division Master</Typography>
						<Typography>Practise Cards</Typography>
					</ColorBox>
				</Grid>
			</Grid>
		</MainContainer>
	)
}

export default FourMfacts121Levels
