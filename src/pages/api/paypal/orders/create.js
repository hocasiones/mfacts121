const fetch = require("node-fetch")
import { uid } from "uid"

export default async function handler(req, res) {
	try {
		const result = await fetch(
			"https://api-m.sandbox.paypal.com/v2/checkout/orders",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"PayPal-Request-Id": `${uid(8)}-${uid(4)}-${uid(4)}-${uid(4)}-${uid(
						12
					)}`,
					Authorization: `Basic ${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}:${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_SECRET}`,
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

		res.status(200).json(result)
	} catch (error) {
		res.status(500).json({ statusCode: 500, message: error.message })
	}
}
