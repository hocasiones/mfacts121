import PropTypes from "prop-types"
import { forwardRef } from "react"
// next
import NextLink from "next/link"
// @mui
import { Box, Link } from "@mui/material"
// config
import { ICON } from "../../../config"
//
import Iconify from "../../Iconify"
import { ListItemStyle as ListItem } from "./style"
import { isExternalLink } from ".."

// ----------------------------------------------------------------------

export const NavItemRoot = forwardRef(function NavItemRoot(
	{ item, active, open, onMouseEnter, onMouseLeave },
	ref
) {
	const { title, path, icon, children, disabled, roles } = item

	if (children) {
		return (
			<ListItem
				ref={ref}
				open={open}
				activeRoot={active}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				disabled={disabled}
				roles={roles}
			>
				<NavItemContent icon={icon} title={title}>
					{children}
				</NavItemContent>
			</ListItem>
		)
	}

	return isExternalLink(path) ? (
		<ListItem
			component={Link}
			href={path}
			target="_blank"
			rel="noopener"
			disabled={disabled}
			roles={roles}
		>
			<NavItemContent icon={icon} title={title}>
				{children}
			</NavItemContent>
		</ListItem>
	) : (
		<NextLink href={path} passHref>
			<ListItem activeRoot={active} disabled={disabled} roles={roles}>
				<NavItemContent icon={icon} title={title}>
					{children}
				</NavItemContent>
			</ListItem>
		</NextLink>
	)
})

// NavItemRoot.propTypes = {
// 	active: PropTypes.bool,
// 	open: PropTypes.bool,
// 	onMouseEnter: PropTypes.func,
// 	onMouseLeave: PropTypes.func,
// 	item: PropTypes.shape({
// 		children: PropTypes.array,
// 		icon: PropTypes.any,
// 		path: PropTypes.string,
// 		title: PropTypes.string,
// 		disabled: PropTypes.bool,
// 		roles: PropTypes.arrayOf(PropTypes.string),
// 	}),
// }

// ----------------------------------------------------------------------

export const NavItemSub = forwardRef(function NavItemSub(
	{ item, active, open, onMouseEnter, onMouseLeave },
	ref
) {
	const { title, path, icon, children, disabled, roles } = item

	if (children) {
		return (
			<ListItem
				ref={ref}
				subItem
				disableRipple
				open={open}
				activeSub={active}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				disabled={disabled}
				roles={roles}
			>
				<NavItemContent icon={icon} title={title} subItem>
					{children}
				</NavItemContent>
			</ListItem>
		)
	}

	return isExternalLink(path) ? (
		<ListItem
			subItem
			href={path}
			disableRipple
			rel="noopener"
			target="_blank"
			component={Link}
			disabled={disabled}
			roles={roles}
		>
			<NavItemContent icon={icon} title={title} subItem>
				{children}
			</NavItemContent>
		</ListItem>
	) : (
		<NextLink href={path} passHref>
			<ListItem
				disableRipple
				activeSub={active}
				subItem
				disabled={disabled}
				roles={roles}
			>
				<NavItemContent icon={icon} title={title} subItem>
					{children}
				</NavItemContent>
			</ListItem>
		</NextLink>
	)
})

// NavItemSub.propTypes = {
// 	active: PropTypes.bool,
// 	open: PropTypes.bool,
// 	onMouseEnter: PropTypes.func,
// 	onMouseLeave: PropTypes.func,
// 	item: PropTypes.shape({
// 		children: PropTypes.array,
// 		icon: PropTypes.any,
// 		path: PropTypes.string,
// 		title: PropTypes.string,
// 		disabled: PropTypes.bool,
// 		roles: PropTypes.arrayOf(PropTypes.string),
// 	}),
// }

// ----------------------------------------------------------------------

// NavItemContent.propTypes = {
// 	children: PropTypes.array,
// 	icon: PropTypes.any,
// 	subItem: PropTypes.bool,
// 	title: PropTypes.string,
// }

function NavItemContent({ icon, title, children, subItem }) {
	return (
		<>
			{icon && (
				<Box
					component="span"
					sx={{
						mr: 1,
						width: ICON.NAVBAR_ITEM_HORIZONTAL,
						height: ICON.NAVBAR_ITEM_HORIZONTAL,
						"& svg": { width: "100%", height: "100%" },
					}}
				>
					{icon}
				</Box>
			)}

			{title}

			{children && (
				<Iconify
					icon={subItem ? "eva:chevron-right-fill" : "eva:chevron-down-fill"}
					sx={{
						ml: 0.5,
						width: ICON.NAVBAR_ITEM_HORIZONTAL,
						height: ICON.NAVBAR_ITEM_HORIZONTAL,
					}}
				/>
			)}
		</>
	)
}
