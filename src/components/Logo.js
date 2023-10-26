import PropTypes from "prop-types"
import { forwardRef } from "react"
// next
import Link from "next/link"
// @mui
import { Box } from "@mui/material"
//image
import Image from "next/image"
import image1 from "public/logo/logo.png"

// ----------------------------------------------------------------------

const Logo = ({ disabledLink = false, sx }) => {
	const logo = (
		<Box
			// ref={ref}
			sx={{ width: "100%", marginRight: "5px", cursor: "pointer", ...sx }}
		>
			<Image
				src={image1.src}
				alt="logo"
				width={image1.width}
				height={image1.height}
			/>
		</Box>
	)

	if (disabledLink) {
		return <>{logo}</>
	}

	return (
		<>
			<Link href="/">{logo}</Link>
		</>
	)
}

// Logo.propTypes = {
// 	disabledLink: PropTypes.bool,
// 	sx: PropTypes.object,
// }

export default Logo
