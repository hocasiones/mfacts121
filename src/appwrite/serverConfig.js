const sdk = require("node-appwrite")

// Init SDK
const client = new sdk.Client()

client
	.setEndpoint(`${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}`)
	.setProject(`${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`)
	.setKey(`${process.env.NEXT_PUBLIC_APPWRITE_SECRET_KEY}`)

const users = new sdk.Users(client)
const ID = sdk.ID
const Query = sdk.Query

export { ID, Query, users }
