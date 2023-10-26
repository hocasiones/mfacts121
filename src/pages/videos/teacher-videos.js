//components
import { Divider, Grid, Typography } from "@mui/material"
import Vimeo from "@u-wave/react-vimeo"
import YouTube from "@u-wave/react-youtube"
import MainContainer from "src/components/MainContainer"
import Subtitle from "src/components/Subtitle"
import Title from "src/components/Title"

const videos1 = [
	{ title: "3 Minute Summary Tour", id: 336245771 },
	{ title: "  Features of Mfacts121, 2019 8 Minute Tour", id: 336005250 },
	{ title: "How To Use Mfacts121", id: 257036161 },
]

const videos2 = [
	{ title: "Skip Counting", id: 166610648 },
	{ title: "Arrays", id: 166620469 },
	{ title: "Practise Cards", id: 166620469 },
]

const videos3 = [
	{ title: "Using Whiteboards", id: "wGwG-1mYvE8" },
	{ title: "Using Printable Resources", id: "It5AlnOZYNo" },
	{ title: "Lesson Snapshot Strategy Discussion", id: "uETbykfgN8k" },
	{ title: "3 x Strategy- Multiplication Explained", id: "p0jCaXX04yM" },
	{ title: "5 x Strategy- Multiplication Explained", id: "D4yhWxfnjoo" },
	{ title: "Using Arrays for Strategies in Multiplication", id: "MQZgivbDNMU" },
	{ title: "Using Arrays", id: "tInB4VNmHdc" },
	{ title: "Multiplication Strategy Chat Activity 1", id: "sO1ET6Gm2x4" },
]

const TeacherVideos = () => (
	<MainContainer title="Teacher Videos">
		<Title>Teacher Videos</Title>
		<Divider sx={{ marginBottom: "30px" }} />

		<Grid container spacing={3} sx={{ marginBottom: "40px" }}>
			{videos1.map((el) => (
				<Grid key={el.id} item xs={12} md={4} sx={{ marginBottom: "20px" }}>
					<Typography variant="h5">{el.title}</Typography>
					<Vimeo video={el.id} responsive />
				</Grid>
			))}
		</Grid>

		<Subtitle>Teacher Talk</Subtitle>
		<Grid container spacing={3} sx={{ marginBottom: "40px" }}>
			{videos2.map((el) => (
				<Grid key={el.id} item xs={12} md={4} sx={{ marginBottom: "20px" }}>
					<Typography variant="h5">{el.title}</Typography>
					<Vimeo video={el.id} responsive />
				</Grid>
			))}
		</Grid>

		<Subtitle>One Minute Tips</Subtitle>
		<Grid container spacing={3} sx={{ marginBottom: "40px" }}>
			{videos3.map((el) => (
				<Grid key={el.id} item xs={12} md={4} sx={{ marginBottom: "20px" }}>
					<Typography variant="h5">{el.title}</Typography>
					<YouTube video={el.id} height={250} />
				</Grid>
			))}
		</Grid>
	</MainContainer>
)
export default TeacherVideos
