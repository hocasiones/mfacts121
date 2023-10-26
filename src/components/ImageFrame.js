import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Paper } from "@mui/material"

const Banner = ({ src, href, frameless, sx }) => {
	return (
		<Paper
			square
			elevation={frameless || 4}
			sx={{
				padding: frameless ? 0 : "5px",
				marginBottom: "50px",
				display: "flex",
				...sx,
			}}
		>
			<Link href={href || ""}>
				<Image
					src={src.src}
					width={src.width}
					height={src.height}
					style={{ cursor: href ? "pointer" : "default" }}
					alt=""
				/>
			</Link>
		</Paper>
	)
}

export default Banner
