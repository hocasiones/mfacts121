import { ArrowBack } from "@mui/icons-material"
import { LoadingButton } from "@mui/lab"
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import MainContainer from "src/components/MainContainer"
import userStore from "src/store/userStore"

const StudentDetails = () => {
	const router = useRouter()
	const userState = userStore()

	// const query = useQuery(["student"], async () => {})
	// const mutation = useMutation((formData) => {})

	//testing
	/* useEffect(() => {
    console.log(query.data);
  }, []); */

	return (
		<MainContainer title="Student Name">
			<Box>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					spacing={2}
					sx={{ width: "100%" }}
				>
					<Button
						variant="outlined"
						startIcon={<ArrowBack />}
						onClick={() => router.back()}
					>
						Back
					</Button>
					<LoadingButton variant="contained">Update</LoadingButton>
				</Stack>
				<Grid container spacing={3} sx={{ mt: 3, mb: 5 }}>
					<Grid item xs={12} md={4}>
						<Paper elevation={3} sx={{ p: "20px" }}>
							<Stack spacing={1}>
								<Typography variant="h6" sx={{ mb: 1 }}>
									Student Details
								</Typography>
								{/* <Typography sx={{ m: 0, textTransform: "capitalize" }}>
									<strong>Name:</strong> {query.data.firstName}{" "}
									{query.data.lastName}
								</Typography>
								<Typography sx={{ m: 0 }}>
									<strong>Username:</strong> {query.data.username}
								</Typography>
								<Typography sx={{ m: 0 }}>
									<strong>Email:</strong> {query.data.email}
								</Typography>
								<Typography sx={{ m: 0, textTransform: "capitalize" }}>
									<strong>Classes:</strong> {query.data.classes.join(", ")}
								</Typography> */}
							</Stack>
						</Paper>
					</Grid>
					<Grid item xs={12} md={8}>
						<Paper elevation={3} sx={{ p: "20px" }}>
							<Stack spacing={2}>
								<Typography variant="h6" sx={{ mb: 1 }}>
									Assessments
								</Typography>
								{/* <GridTable /> */}
							</Stack>
						</Paper>
					</Grid>
				</Grid>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					spacing={2}
					sx={{ width: "100%" }}
				>
					<Button
						variant="outlined"
						startIcon={<ArrowBack />}
						onClick={() => router.back()}
					>
						Back
					</Button>
					<LoadingButton variant="contained">Update</LoadingButton>
				</Stack>
			</Box>
		</MainContainer>
	)
}

export default StudentDetails
