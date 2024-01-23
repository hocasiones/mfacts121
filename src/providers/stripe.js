import React from "react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import userStore from "src/store/userStore"

const stripePromise = loadStripe("pk_test_Yk3eeONfzoRgC3NRk804V3Ez00AOK3oWa6")
const stripeSecret = require("stripe")(
	"sk_test_0gfZHymEXG8riNSCbxFkWL3D00S0JKgjxW"
)

const StripeProvider = ({ children }) => {
	const userState = userStore()

	//stripe options
	const stripeMemo = React.useMemo(() => {
		return stripePromise
	}, [])

	React.useEffect(() => {
		const intent = async () => {
			const paymentIntent = await stripeSecret.paymentIntents.create({
				amount: 100,
				currency: "aud",
				automatic_payment_methods: {
					enabled: true,
				},
			})
			userState.setStripePaymentIntentSecret(paymentIntent?.client_secret)
		}
		intent()
	}, [userState])

	const options = React.useMemo(() => {
		return {
			clientSecret: userState.stripePaymentIntentSecret,
		}
	}, [userState.stripePaymentIntentSecret])

	if (userState.stripePaymentIntentSecret === "") {
		return <React.Fragment>{children}</React.Fragment>
	}

	return (
		<Elements stripe={stripeMemo} options={options}>
			{children}
		</Elements>
	)
}

export default StripeProvider
