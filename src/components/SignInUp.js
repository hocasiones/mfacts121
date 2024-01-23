import { Box, GlobalStyles, Paper, useTheme } from "@mui/material"
// import image1 from '../../public/assets/loginImg.jpg';

const SignInUp = ({ children, fullHeight, sx }) => {
	const theme = useTheme()

	return (
		<Box
			sx={{
				// backgroundImage: `url(${image1.src})`,
				backgroundColor: "#00A3E4",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				height: fullHeight ? "100%" : "auto",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "20px",
				overflow: "auto",
			}}
		>
			<GlobalStyles
				styles={{ body: { margin: "0", backgroundColor: "#00A3E4" } }}
			/>
			<Paper
				elevation={6}
				sx={{ padding: "25px 20px", maxWidth: "350px", ...sx }}
			>
				{children}
			</Paper>
		</Box>
	)
}

export default SignInUp
