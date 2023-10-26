import { users, ID } from "src/appwrite/serverConfig"
import { database } from "src/appwrite/config"

export default function handler(req, res) {
	const userId = ID.unique()
	const email = req.body.email
	const password = req.body.password
	const firstName = req.body.firstName
	const lastName = req.body.lastName
	const role = req.body.role
	const schoolId = req.body.schoolId
	const schoolName = req.body.schoolName
	const classes = req.body.classes

	const promise = users.createBcryptUser(
		userId,
		email,
		password,
		`${firstName} ${lastName}`
	)
	promise.then(
		function (response) {
			// console.log(response)
			res.status(200).json(response)
		},
		function (error) {
			console.log(error)
			res.status(501).json({ error, message: "Something went wrong" })
		}
	)
}
