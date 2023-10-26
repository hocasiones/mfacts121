import { Box, GlobalStyles, Paper, useTheme } from "@mui/material"
// import image1 from '../../public/assets/loginImg.jpg';

const SignInUp = ({ children, maxWidth }) => {
	const theme = useTheme()

	return (
		<Box
			sx={{
				// backgroundImage: `url(${image1.src})`,
				backgroundColor: "#00A3E4",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "20px",
			}}
		>
			<GlobalStyles styles={{ body: { margin: "0" } }} />
			<Paper
				elevation={6}
				sx={{ padding: "25px 20px", maxWidth: maxWidth || "350px" }}
			>
				{children}
			</Paper>
		</Box>
	)
}

export default SignInUp
