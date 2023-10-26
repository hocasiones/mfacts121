import { Box } from "@mui/system"
//components
import { Divider, Grid, Paper, Typography, useTheme } from "@mui/material"
import Title from "src/components/Title"

const StudentDashboard = () => {
	const theme = useTheme()

	return (
		<Box>
			<Title>Dashboard</Title>
			<Paper
				elevation={4}
				sx={{ padding: "30px", margin: "0 0 30px", textAlign: "center" }}
			>
				<Typography variant="h1">Welcome Students!</Typography>
			</Paper>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<Paper elevation={4} sx={{ padding: "30px" }}>
						<Typography variant="h4" sx={{ textAlign: "center" }}>
							Your Progress!
						</Typography>
						<Divider sx={{ margin: "20px 0" }} />
						<Typography sx={{ fontWeight: "bold", margin: "0 0 10px" }}>
							{`The facts you're working on: `}
							<span style={{ color: theme.palette.common.blue }}>
								Blue Master
							</span>
						</Typography>
						<Typography sx={{ fontWeight: "bold", margin: "0 0 10px" }}>
							Keep up the effort!
						</Typography>
						<Typography sx={{ fontWeight: "bold", margin: "0 0 10px" }}>
							You can grow your maths brain!
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</Box>
	)
}

export default StudentDashboard
