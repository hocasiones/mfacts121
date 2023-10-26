import {
	Box,
	CircularProgress,
	Grid,
	Paper,
	Typography,
	useTheme,
} from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import banner1 from "public/assets/banners/banner1.png"
import { useState } from "react"
import MainContainer from "src/components/MainContainer"

import { Query, database } from "src/appwrite/config"
import userStore from "src/store/userStore"
import ImageFrame from "../../components/ImageFrame"
import Title from "../../components/Title"

// ----------------------------------------------------------------------

export default function OnlinePractise() {
	const theme = useTheme()
	const userState = userStore()
	const [rows, setRows] = useState([])

	//query
	const queriedData = useQuery({
		queryKey: ["assessments"],
		queryFn: async () => {
			return database.listDocuments("main", "assessments", [
				Query.limit(100),
				Query.equal("type", "practise"),
			])
		},
		onSuccess: (data) => {
			setRows(() => {
				return data.documents.sort((a, b) => {
					return a.order - b.order
				})
			})
		},
	})

	return (
		<MainContainer title="Online Practise">
			<Title>Online Practise</Title>
			<ImageFrame src={banner1} />
			{queriedData.isLoading && (
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<CircularProgress />
				</Box>
			)}
			{queriedData.isSuccess && (
				<Box>
					<Grid justifyContent="center" container spacing={2}>
						{rows.map((el) => (
							<Grid key={el.name} item xs={12} md={8}>
								<Link href={`/online-practise/${el.$id}`}>
									<Paper
										elevation={3}
										square
										sx={{
											backgroundColor: el.color,
										}}
									>
										<Typography
											sx={{
												p: "20px 10px",
												color: theme.palette.common.white,
												textAlign: "center",
												fontWeight: "bold",
												cursor: "pointer",
												fontSize: "18px",
												textShadow: "0 0 5px #585858",
												m: 0,
											}}
										>
											{el.name}
										</Typography>
									</Paper>
								</Link>
							</Grid>
						))}
					</Grid>
				</Box>
			)}
		</MainContainer>
	)
}
