import { Box, GlobalStyles, Paper, useTheme } from "@mui/material"
// import image1 from '../../public/assets/loginImg.jpg';

import { PayPalScriptProvider } from "@paypal/react-paypal-js"

const SignInUp = ({ children, fullHeight, sx }) => {
	const theme = useTheme()

	return (
		<PayPalScriptProvider
			options={{
				clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
				"client-id": "sb",
				currency: "AUD",
				intent: "capture",
			}}
		>
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
				<GlobalStyles styles={{ body: { margin: "0" } }} />
				<Paper
					elevation={6}
					sx={{ padding: "25px 20px", maxWidth: "350px", ...sx }}
				>
					{children}
				</Paper>
			</Box>
		</PayPalScriptProvider>
	)
}

export default SignInUp
