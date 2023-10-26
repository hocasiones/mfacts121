//components
import { Divider, Grid, Typography } from "@mui/material"
import Vimeo from "@u-wave/react-vimeo"
import MainContainer from "src/components/MainContainer"
import Title from "src/components/Title"

const videos1 = [
	{ title: "Using MFacts121", id: 288140094 },
	{ title: "Using Flash Cards", id: 288135787 },
]

const ParentVideos = () => (
	<MainContainer title="Parent Videos">
		<Title>Parent Videos</Title>
		<Divider sx={{ marginBottom: "30px" }} />

		<Typography variant="h5" sx={{ marginBottom: "50px" }}>
			Can-do, easy-to-achieve tips for parents. A few minutes can make a big
			difference for your child.
		</Typography>

		<Grid container spacing={3} sx={{ marginBottom: "40px" }}>
			{videos1.map((el) => (
				<Grid key={el.id} item xs={12} md={4} sx={{ marginBottom: "20px" }}>
					<Typography variant="h5">{el.title}</Typography>
					<Vimeo video={el.id} responsive />
				</Grid>
			))}
		</Grid>
	</MainContainer>
)
export default ParentVideos
