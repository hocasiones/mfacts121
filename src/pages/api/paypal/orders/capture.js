import fetch from "node-fetch"
import { uid } from "uid"
const base64 = require("base-64")

export default async function handler(req, res) {
	console.log(req.body)
	try {
		const order = await fetch(
			`${process.env.NEXT_PUBLIC_PAYPAL_BASE_URL}/checkout/orders/${req.body.orderID}/capture`,
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
			}
		)
		const orderJson = await order.json()

		res.status(200).json(orderJson)
	} catch (error) {
		res.status(500).json({ statusCode: 500, message: error.message })
	}
}
