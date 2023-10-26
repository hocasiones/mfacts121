import { Divider, Grid, Typography, useTheme } from "@mui/material"
import React from "react"
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"

//components
import MainContainer from "src/components/MainContainer"
import Subtitle from "src/components/Subtitle"
import Title from "src/components/Title"
import ColorBox from "src/components/ColorBox"

const Curriculum = () => {
	const theme = useTheme()

	return (
		<MainContainer title="Curriculum">
			<Title>Curriculum</Title>
			<Divider sx={{ marginBottom: "30px" }} />
			<Subtitle>Units of Work</Subtitle>
			<Grid container spacing={3} sx={{ marginBottom: "40px" }}>
				<Grid item xs={12} md={4}>
					<ColorBox bg={theme.palette.common.red} btn href="/curriculum/year-3">
						<Typography variant="h4">Year 3</Typography>
					</ColorBox>
				</Grid>
				<Grid item xs={12} md={4}>
					<ColorBox
						bg={theme.palette.common.green}
						btn
						href="/curriculum/year-4"
					>
						<Typography variant="h4">Year 4</Typography>
					</ColorBox>
				</Grid>
				<Grid item xs={12} md={4}>
					<ColorBox
						bg={theme.palette.common.yellow}
						btn
						href="/curriculum/year-5-6"
					>
						<Typography variant="h4">Year 5/6</Typography>
					</ColorBox>
				</Grid>
			</Grid>

			<Grid container spacing={3} sx={{ marginBottom: "40px" }}>
				<Grid item xs={12} md={12}>
					<ColorBox
						bg={theme.palette.common.blue}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						href="/assets/pdf/Teacher-Talk-and-Prerequitsite-Skills-2019.pdf"
						newTab
					>
						<Typography variant="h4">
							Prerequisite Skills & Teacher Talk
						</Typography>
						<Typography variant="body1">
							Tips on getting the most of Mfacts121 and to make sure your
							students have the basics.
						</Typography>
					</ColorBox>
				</Grid>
			</Grid>

			<Divider sx={{ marginBottom: "20px" }} />
			<Subtitle>Useful Links</Subtitle>
			<Grid container spacing={3} sx={{ marginBottom: "40px" }}>
				<Grid item xs={12} md={12}>
					<ColorBox
						bg={theme.palette.common.blue}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						href="/assets/pdf/Mfacts121-Levels-and-Strategies-Teacher-Checklist-2019-1.pdf"
						newTab
					>
						<Typography variant="h4">
							Levels & Strategies Teacher Checklist
						</Typography>
					</ColorBox>
				</Grid>
			</Grid>
			<Grid container spacing={3} sx={{ marginBottom: "40px" }}>
				<Grid item xs={12} md={4}>
					<ColorBox
						bg={theme.palette.common.red}
						btn={{
							text: "View",
							icon: <PictureAsPdfIcon />,
						}}
						href="/assets/pdf/Mfacts121-Strategies-List.docx-1.pdf"
						newTab
					>
						<Typography variant="h4">Mfacts121 Strategies</Typography>
						<Typography variant="body1">Full list of strategies</Typography>
					</ColorBox>
				</Grid>
				<Grid item xs={12} md={4}>
					<ColorBox
						bg={theme.palette.common.green}
						btn
						href="/four-mfacts121-levels"
					>
						<Typography variant="h4">Four Mfacts121 Levels</Typography>
						<Typography variant="body1">
							Printable Levels
							<br />
							Practise Cards
							<br />
							Printable Levels
						</Typography>
					</ColorBox>
				</Grid>
				<Grid item xs={12} md={4}>
					<ColorBox
						bg={theme.palette.common.yellow}
						btn
						href="/printable-resources"
					>
						<Typography variant="h4">Printable Resources</Typography>
						<Typography variant="body1">
							Games
							<br />
							Unit Planners
							<br />
							All Printable Docs
						</Typography>
					</ColorBox>
				</Grid>
			</Grid>

			<Grid container spacing={3} sx={{ marginBottom: "40px" }}>
				<Grid item xs={12} md={4}>
					<ColorBox bg={theme.palette.common.blue} btn href="/strategy-videos">
						<Typography variant="h4">Strategy Videos</Typography>
						<Typography variant="body1">
							Videos explain each strategy
						</Typography>
					</ColorBox>
				</Grid>
				<Grid item xs={12} md={4}>
					<ColorBox bg={theme.palette.common.red} btn href="/growth-mindset">
						<Typography variant="h4">Growth Mindset</Typography>
						<Typography variant="body1">
							Creating an ‘I CAN’ attitude!
						</Typography>
					</ColorBox>
				</Grid>
				<Grid item xs={12} md={4}>
					<ColorBox
						bg={theme.palette.common.green}
						btn
						href="/parents-as-partners"
					>
						<Typography variant="h4">Parents As Partners</Typography>
						<Typography variant="body1">Connecting to home</Typography>
					</ColorBox>
				</Grid>
			</Grid>

			<Divider sx={{ marginBottom: "30px" }} />

			<Subtitle>Student Links</Subtitle>
			<Grid container spacing={3} sx={{ marginBottom: "40px" }}>
				<Grid item xs={12} md={4}>
					<ColorBox
						bg={theme.palette.common.grey}
						btn
						href="/self-directed-learning"
					>
						<Typography variant="h4">Self Directed Learning Tasks</Typography>
					</ColorBox>
				</Grid>
			</Grid>
		</MainContainer>
	)
}

export default Curriculum
