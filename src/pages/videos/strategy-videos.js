import React from "react"

//components
import MainContainer from "src/components/MainContainer"
import Title from "src/components/Title"
import ImageFrame from "src/components/ImageFrame"
import { Grid, Typography } from "@mui/material"
import Vimeo from "@u-wave/react-vimeo"
import Subtitle from "src/components/Subtitle"

//images
import banner1 from "public/assets/banners/strategy-videos.png"
import banner2 from "public/assets/banners/BannerCheck.png"

const videos1 = [
	{ title: "Zero Facts", id: 162244737 },
	{ title: "One Facts", id: 160852807 },
	{ title: "Twos Facts", id: 160852899 },
	{ title: "Threes Facts", id: 161279512 },
	{ title: "Fours Facts", id: 167376157 },
	{ title: "Fives Facts", id: 161280089 },
	{ title: "Sixes Facts", id: 167376139 },
	{ title: "Eights Facts", id: 161280365 },
	{ title: "Nines Facts", id: 165534003 },
	{ title: "Tens Facts", id: 168136062 },
	{ title: "Turn Around Facts", id: 162245536 },
	{ title: "Distributive Facts", id: 179446233 },
	{ title: "Making Connections", id: 165534394 },
]

const videos2 = [
	{ title: "Written Algorithms", id: 251596960 },
	{ title: "Algorithms for Decimals", id: 251772996 },
	{ title: "Grid Method", id: 251772996 },
	{ title: "Grid Method With Decimals", id: 251772378 },
	{ title: "Division - Let's Begin Part 1", id: 251784514 },
	{ title: "Division - Let's Begin Part 2", id: 251785638 },
	{ title: "Division - Consolidate", id: 252086423 },
	{ title: "Division - Formal Algorithms, Short Division", id: 516063620 },
]

const StrategyVideos = () => (
	<MainContainer title="Strategy Videos">
		<Title>Strategy Videos</Title>
		<ImageFrame src={banner1} />
		<Subtitle>Strategy Videos</Subtitle>
		<Grid container spacing={3} sx={{ marginBottom: "40px" }}>
			{videos1.map((el) => (
				<Grid key={el.id} item xs={12} md={4} sx={{ marginBottom: "20px" }}>
					<Typography variant="h5">{el.title}</Typography>
					<Vimeo video={el.id} responsive />
				</Grid>
			))}
		</Grid>
		<Subtitle>Quick Tips Videos</Subtitle>
		<Grid container spacing={3} sx={{ marginBottom: "40px" }}>
			{videos2.map((el) => (
				<Grid key={el.id} item xs={12} md={4} sx={{ marginBottom: "20px" }}>
					<Typography variant="h5">{el.title}</Typography>
					<Vimeo video={el.id} responsive />
				</Grid>
			))}
		</Grid>
		<ImageFrame src={banner2} />
	</MainContainer>
)
export default StrategyVideos
