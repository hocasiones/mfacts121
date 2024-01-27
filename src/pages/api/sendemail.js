import { SMTPClient } from "emailjs"
import { render } from "@react-email/render"
import SignUpInvoice from "../../../react-email-starter/emails/signup-invoice"
import SignUpInvoiceAdmin from "../../../react-email-starter/emails/signup-invoice-admin"

const env = process.env

const client = new SMTPClient({
	user: env.NEXT_PUBLIC_USER,
	password: env.NEXT_PUBLIC_PASSWORD,
	host: env.NEXT_PUBLIC_HOST,
	port: env.NEXT_PUBLIC_PORT,
	ssl: true,
	// tls: true,
})

const sendEmail = async (to, subject, html) => {
	return await client.sendAsync({
		from: "info@mfacts121.com",
		to: to,
		// cc: "else <else@your-email.com>",
		subject: subject,
		text: "",
		attachment: [{ data: html, alternative: true }],
	})
}

export default async function handler(req, res) {
	const body = req.body

	const htmlAdmin = render(<SignUpInvoiceAdmin data={body} />, {
		pretty: true,
	})

	const html = render(<SignUpInvoice />, {
		pretty: true,
	})

	try {
		await sendEmail("info@mfacts121.com", "Invoice Request", htmlAdmin)
		await sendEmail(body.email, "Invoice Request", html)
		res.status(200).json({ success: true })
	} catch (err) {
		console.log(err)
		res.status(500).json({ error: err })
	}
}
