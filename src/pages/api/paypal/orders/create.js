import fetch from "node-fetch"
import { uid } from "uid"
const base64 = require("base-64")

export default async function handler(req, res) {
	try {
		const order = await fetch(
			`${process.env.NEXT_PUBLIC_PAYPAL_BASE_URL}/checkout/orders`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"PayPal-Request-Id": `${uid(8)}-${uid(4)}-${uid(4)}-${uid(4)}-${uid(
						12
					)}`,
					Authorization:
						`Basic ` +
						base64.encode(
							process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID +
								":" +
								process.env.NEXT_PUBLIC_PAYPAL_SECRET_KEY
						),
				},
				body: JSON.stringify({
					intent: "CAPTURE",
					purchase_units: [
						{
							reference_id: uid(20),
							amount: { currency_code: "AUD", value: "100.00" },
						},
					],
					payment_source: {
						paypal: {
							experience_context: {
								payment_method_preference: "IMMEDIATE_PAYMENT_REQUIRED",
								brand_name: "Mfacts121",
								locale: "en-AU",
								landing_page: "LOGIN",
								shipping_preference: "NO_SHIPPING",
								user_action: "PAY_NOW",
								return_url: process.env.NEXT_PUBLIC_RETURN_URL,
								cancel_url: process.env.NEXT_PUBLIC_CANCEL_URL,
							},
						},
					},
				}),
			}
		)
		const orderJson = await order.json()

		res.status(200).json(orderJson)
	} catch (error) {
		res.status(500).json({ statusCode: 500, message: error.message })
	}
}
