import { users } from "src/appwrite/serverConfig"

export default async function handler(req, res) {
	const id = req.body.id
	const email = req.body.email
	const password = req.body.password
	const firstName = req.body.firstName
	const lastName = req.body.lastName
	const role = req.body.role
	const schoolId = req.body.schoolId
	const schoolName = req.body.schoolName
	const classes = req.body.classes

	try {
		let promise
		//update user prefs
		// const promisePrefs = users.updatePrefs(id, {
		// 	firstName: firstName,
		// 	lastName: lastName,
		// 	role: role,
		// 	schoolId: schoolId,
		// 	schoolName: schoolName,
		// 	classes: classes,
		// })
		// promise = await promisePrefs
		//update user name
		if (firstName && lastName) {
			const promiseName = users.updateName(id, firstName + " " + lastName)
			promise = await promiseName
		}
		//update user email
		if (email) {
			const promiseEmail = users.updateEmail(id, email)
			promise = await promiseEmail
		}
		//update user password
		if (password) {
			const promisePassword = users.updatePassword(id, password)
			promise = await promisePassword
		}
		// console.log(promise)

		res.status(200).json(promise)
	} catch (error) {
		console.log(error)
		res.status(501).json({ error, message: "Something went wrong" })
	}

	// const promise = users.updateEmail(id, email)
	// promise.then(
	// 	function (response) {
	// 		const promise = users.updatePassword("[USER_ID]", "password")
	// 		promise.then(
	// 			function (response) {
	// 				const promise = users.updatePrefs(id, {
	// 					firstName: firstName,
	// 					lastName: lastName,
	// 					role: role,
	// 					schoolId: schoolId,
	// 					schoolName: schoolName,
	// 					classes: classes,
	// 				})
	// 				promise.then(
	// 					function (response) {
	// 						res.status(200).json(response)
	// 					},
	// 					function (error) {
	// 						console.log(error)
	// 						res.status(501).json({ error, message: "Something went wrong" })
	// 					}
	// 				)
	// 			},
	// 			function (error) {
	// 				console.log(error)
	// 			}
	// 		)
	// 	},
	// 	function (error) {
	// 		console.log(error)
	// 		res.status(501).json({ error, message: "Something went wrong" })
	// 	}
	// )
}
