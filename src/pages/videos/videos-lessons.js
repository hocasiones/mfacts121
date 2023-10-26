//components
import { Divider, Grid, Typography } from "@mui/material"
import Vimeo from "@u-wave/react-vimeo"
import ImageFrame from "../../components/ImageFrame"
import MainContainer from "../../components/MainContainer"
import Title from "../../components/Title"

//images
import image1 from "../../../public/assets/banners/BannerCheck.png"

const videos1 = [
	{
		title: "Growth Mindset Goals",
		content:
			"Use our checklist to foster your growth mindset and keep working on your multiplication and division facts! <br/> Here’s the Checklist to use!",
		id: 437582797,
	},
	{
		title: "Top 5 Tips….",
		content:
			"When you’re working on your multiplication facts at home, choose one or more of these 5 tips to complete..and help grow your maths brain.",
		id: 410800085,
	},
	{
		title: "Phase 1, Lesson 1",
		content:
			"Multiples; practise skip counting by 4s or 6s. Multiplication concepts- what does 3 x 5  mean to you? View the 3X_  Strategy Video. Practise ‘doubles’ and ‘doubles plus one more group’ equations. Get onto an Online Practise and grow our maths brain!",
		id: 409761206,
	},
	{
		title: "Phase 2, Lesson 1",
		content:
			"Multiples; practise skip counting by 4s, 6s, 7s, 8s, or 9s. Multiplication concepts- what does 5 x 8  mean to you?What strategy could we use to solve it? View the 5X_ Strategy Video. Practise the 5X strategy on basic facts and larger numbers too. Get onto an Online Practise and grow our maths brain!",
		id: 411910927,
	},
	{
		title: "Phase 2, Lesson 2",
		content:
			"Warm up with an Online Practise of multiplication facts. Then think about how to solve 2-digit by 1-digit multiplication. Break it up (distributive property), grid method or the algorithm. What’s your strategy?",
		id: 422236561,
	},
	{
		title: "Phase 3, Lesson 1",
		content:
			"Multiples; practise counting by 6s, 7s, 8s, or 9s. Check our list via a calculator and by using division. What does 9 x 5  mean to you? What strategy could we use to solve it? View the 9X_  Strategy Video. Practise the 9X strategy on basic facts and larger equations too. Do division facts practise, using fact families. Do an Online Practise!",
		id: 414964463,
	},
	{
		title: "Phase 3, Lesson 2",
		content:
			"Warm up with an Online Practise of multiplication facts. Then thinking about how to solve 3-digit by 1-digit multiplication. Break it up (distributive property), grid method or the algorithm. What’s your strategy?",
		id: 422298271,
	},
	{
		title: "Maths Magic, Trick #2",
		content: "Try this fun calculation! Suits Year 2/3 students approximately.",
		id: 415411534,
	},
	{ title: "Maths Magic, Trick #3", content: "", id: 161279311 },
	{ title: "Maths Magic, Trick #4", content: "", id: 161279311 },
	{ title: "Maths Magic, Trick #1", content: "", id: 161279311 },
	{ title: "Mfacts Video", content: "", id: 161279311 },
]

const VideosLessons = () => (
	<MainContainer title="Videos Lessons">
		<Title>Videos Lessons</Title>
		<Divider sx={{ marginBottom: "30px" }} />

		<Grid container spacing={3} sx={{ marginBottom: "40px" }}>
			{videos1.map((el) => (
				<Grid
					item
					key={el.title}
					xs={12}
					md={4}
					sx={{
						marginBottom: "40px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					<Typography variant="h5">{el.title}</Typography>
					<Typography variant="body1" sx={{ fontSize: "14px" }}>
						{el.content}
					</Typography>
					<Vimeo video={el.id} responsive />
				</Grid>
			))}
		</Grid>

		<ImageFrame src={image1} />
	</MainContainer>
)
export default VideosLessons
