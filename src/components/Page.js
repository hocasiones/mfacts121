import { forwardRef } from "react"
import PropTypes from "prop-types"
// next
import Head from "next/head"
// @mui
import { Box } from "@mui/material"

// ----------------------------------------------------------------------

function Page({ children, title = "", meta, ...other }, ref) {
	return (
		<>
			<Head>
				<title>{`${title} | Mfacts121`}</title>
				{meta}
			</Head>

			<Box {...other}>{children}</Box>
		</>
	)
}

// Page.propTypes = {
// 	children: PropTypes.node.isRequired,
// 	title: PropTypes.string,
// 	meta: PropTypes.node,
// }

export default Page
