import React from "react"
import MainContainer from "src/components/MainContainer"
import Title from "src/components/Title"
import {
	useTheme,
	Divider,
	Stack,
	Box,
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Resources from "../../components/resources"

const PrintableResources = () => {
	const theme = useTheme()

	return (
		<MainContainer title="Printable Resources">
			<Title>Printable Resources</Title>
			<Divider sx={{ marginBottom: "30px" }} />
			<Stack
				sx={{
					marginBottom: "40px",
					"a:hover": {
						color: theme.palette.common.green + " !important",
					},
				}}
			>
				{Resources.map((resource, index) => (
					<Accordion key={index}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
							sx={{ border: "none" }}
						>
							<Typography
								variant="h6"
								sx={{ color: theme.palette.common.blue, margin: 0 }}
							>
								{resource.title}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							{resource.data.map((el) => (
								<a
									href=""
									key={el.title}
									style={{ color: theme.palette.common.black }}
								>
									<Typography variant="body1" sx={{ marginBottom: "10px" }}>
										{el.title}
									</Typography>
								</a>
							))}
						</AccordionDetails>
					</Accordion>
				))}
			</Stack>
		</MainContainer>
	)
}

export default PrintableResources
