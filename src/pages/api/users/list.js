import { users, Query } from "src/appwrite/serverConfig"

export default function handler(req, res) {
	let promise
	// console.log(req.body.schoolId)
	// if (req.body.schoolId) {
	promise = users.list({
		queries: Query.equal("email", "teacher@mfacts121.com"),
	})
	// } else {
	// 	promise = users.list()
	// }

	promise.then(
		function (response) {
			console.log(response)
			res.status(200).json(response)
		},
		function (error) {
			console.log(error)
			res.status(501).json({ error, message: "Something went wrong" })
		}
	)
}
