import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Section,
	Text,
} from "@react-email/components"
import * as React from "react"

const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: ""

const SignUpInvoiceAdmin = ({ data }) => (
	<Html>
		<Head />
		<Preview>Sign Up Invoice Request</Preview>
		<Body style={main}>
			<Container style={container}>
				<Section style={box}>
					<Img
						src={`https://appwrite1.firahost.com/v1/storage/buckets/static/files/65b4b5355b36f804f2ac/view?project=64df5ca8235ff2f00ba3&mode=admin`}
						width="300"
						height="118"
						alt="Mfacts121"
						style={{ margin: "0 auto" }}
					/>
					<Hr style={hr} />
					<Text style={paragraph}>
						Hi Justine/Natalie, <br />
						<br />
						{data?.firstName} {data?.lastName} has requested an invoice sign up
						for {data?.plan} plan.
					</Text>
					<Text style={paragraph}>
						Please find the details below: <br />
						<br />
						Email: {data?.email} <br />
						Plan: {data?.plan} <br />
						Full Name: {data?.firstName} {data?.lastName} <br />
						School: {data?.school} <br />
					</Text>
					{/* <Button style={button} href="https://dashboard.stripe.com/login">
						View your Stripe Dashboard
					</Button> */}
					{/* <Hr style={hr} /> */}
					{/* <Text style={paragraph}>
						If you haven't finished your integration, you might find our{" "}
						<Link style={anchor} href="https://stripe.com/docs">
							docs
						</Link>{" "}
						handy.
					</Text> */}
					<Text style={paragraph}>— Mfacts121</Text>
					<Hr style={hr} />
					<Text style={footer}>Copyright © Mfacts121</Text>
				</Section>
			</Container>
		</Body>
	</Html>
)

export default SignUpInvoiceAdmin

const main = {
	backgroundColor: "#f6f9fc",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
	backgroundColor: "#ffffff",
	margin: "0 auto",
	padding: "20px 0 48px",
	marginBottom: "64px",
}

const box = {
	padding: "0 48px",
}

const hr = {
	borderColor: "#e6ebf1",
	margin: "20px 0",
}

const paragraph = {
	color: "#525f7f",

	fontSize: "16px",
	lineHeight: "24px",
	textAlign: "left",
}

const anchor = {
	color: "#556cd6",
}

const button = {
	backgroundColor: "#539de3",
	borderRadius: "5px",
	color: "#fff",
	fontSize: "16px",
	fontWeight: "bold",
	textDecoration: "none",
	textAlign: "center",
	display: "block",
	width: "100%",
	padding: "10px",
}

const footer = {
	color: "#8898aa",
	fontSize: "12px",
	lineHeight: "16px",
}
