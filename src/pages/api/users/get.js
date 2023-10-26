import { users } from "src/appwrite/serverConfig"

export default function handler(req, res) {
	const promise = users.get(req.body.id)
	promise.then(
		function (response) {
			res.status(200).json(response)
		},
		function (error) {
			console.log(error)
			res.status(501).json({ error, message: "Something went wrong" })
		}
	)
}
