import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material"
import {
	Box,
	CircularProgress,
	Grid,
	Stack,
	Typography,
	useTheme,
} from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import banner1 from "public/assets/banners/banner1.png"
import { useState } from "react"
import MainContainer from "src/components/MainContainer"
import { Query, database } from "src/appwrite/config"
import ImageFrame from "../../components/ImageFrame"
import Title from "../../components/Title"
import userStore from "../../store/userStore"

// ----------------------------------------------------------------------

export default function OnlineAssessment() {
	const theme = useTheme()
	const userState = userStore()
	const [rows, setRows] = useState([])
	const [userAssessments, setUserAssessments] = useState([])

	//query
	const queriedData = useQuery({
		queryKey: ["assessments"],
		queryFn: async () => {
			return database.listDocuments("main", "assessments", [
				Query.limit(100),
				Query.equal("type", "assessment"),
			])
		},
		onSuccess: (data) => {
			// console.log(data.documents)
			setRows(() => {
				return data.documents.sort((a, b) => {
					return a.order - b.order
				})
			})
		},
	})

	useQuery({
		queryKey: ["userAssessments"],
		queryFn: async () => {
			return database.listDocuments("main", "quizzes", [
				Query.limit(100),
				Query.equal("userId", userState.User.$id),
				Query.equal("type", "assessment"),
			])
		},
		onSuccess: (data) => {
			// console.log(data)
			setUserAssessments(() => {
				return data.documents.map((el) => el.assessmentName)
			})
		},
		enabled: userState?.User?.$id ? true : false,
	})

	const headingStyle = {
		// marginBottom: '20px',
		paddingLeft: "15px",
		item: {
			backgroundColor: "#F3F3F3",
			padding: "10px 20px !important",
			border: "1px solid #DDDDDD;",
			fontWeight: "600",
			fontSize: "18px",
		},
	}

	const bodyStyle = {
		paddingLeft: "15px",
		marginTop: "0px",
		cursor: "pointer",
		item: {
			border: "1px solid #DDDDDD",
			// borderTop: 0,
			padding: "10px 20px !important",
			fontWeight: "500",
			color: theme.palette.common.white,
			display: "flex",
			alignItems: "center",
		},
	}

	return (
		<MainContainer title="Online Assessment">
			<Title>Online Assessment</Title>
			<ImageFrame src={banner1} />
			{queriedData.isLoading && (
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<CircularProgress />
				</Box>
			)}
			{queriedData.isSuccess && (
				<Box sx={{ marginBottom: "50px" }}>
					<Stack spacing={1}>
						<Grid container spacing={2} sx={headingStyle}>
							<Grid item xs={10} sx={headingStyle.item}>
								<Typography sx={{ m: 0, fontWeight: "bold", fontSize: "20px" }}>
									Assessments
								</Typography>
							</Grid>
							<Grid
								item
								xs={2}
								sx={headingStyle.item}
								style={{ textAlign: "center" }}
							>
								<Typography sx={{ m: 0, fontWeight: "bold", fontSize: "20px" }}>
									Status
								</Typography>
							</Grid>
						</Grid>
						{rows.map((el) => (
							<Box
								key={el.$id}
								sx={{
									pointerEvents:
										el.prerequisite === null ||
										(!userAssessments.includes(el.prerequisite) && "none"),
									filter:
										el.prerequisite === null ||
										(!userAssessments.includes(el.prerequisite) &&
											"grayscale(.7)"),
								}}
							>
								<Link key={el.id} href={`/online-assessment/${el.$id}`}>
									<Grid container spacing={2} sx={bodyStyle}>
										<Grid
											item
											xs={10}
											sx={bodyStyle.item}
											style={{ backgroundColor: el.color }}
										>
											<Typography
												variant="body1"
												sx={{
													m: 0,
													fontWeight: "bold",
													fontSize: "18px",
													textShadow: "0 0 5px #585858",
												}}
											>
												{el.name}
											</Typography>
										</Grid>
										<Grid
											item
											xs={2}
											sx={bodyStyle.item}
											style={{ justifyContent: "center" }}
										>
											{userAssessments.includes(el.name) ? (
												<CheckBox
													sx={{
														color: theme.palette.common.green,
														fontSize: "40px",
													}}
												/>
											) : (
												<CheckBoxOutlineBlank
													sx={{
														color: theme.palette.common.green,
														fontSize: "40px",
													}}
												/>
											)}
										</Grid>
									</Grid>
								</Link>
							</Box>
						))}
					</Stack>
				</Box>
			)}
		</MainContainer>
	)
}
