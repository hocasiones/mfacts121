module.exports = {
	async redirects() {
		return [
			{
				source: "/",
				destination: "/signin",
				permanent: false,
			},
		]
	},
	// webpack: (config, { isServer }) => {
	// 	if (!isServer) {
	// 		config.resolve.fallback = {
	// 			fs: false,
	// 			process: false,
	// 			os: false,
	// 			stream: false,
	// 			tls: false,
	// 			net: false,
	// 			events: false,
	// 			crypto: false,
	// 			util: false,
	// 		}
	// 	}
	// 	config.module.exprContextCritical = false
	// 	return config
	// },
}
