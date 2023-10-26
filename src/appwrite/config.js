import {
	ID,
	Permission,
	Role,
	Query,
	Client,
	Account,
	Databases,
	Storage,
	Functions,
} from "appwrite"

const client = new Client()

client
	.setEndpoint(`${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}`)
	.setProject(`${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`)

const account = new Account(client)
const database = new Databases(client)
const storage = new Storage(client)
const functions = new Functions(client)

export {
	ID,
	Permission,
	Role,
	Query,
	client,
	account,
	database,
	storage,
	functions,
}
