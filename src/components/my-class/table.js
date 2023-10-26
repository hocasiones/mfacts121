import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/system"
import {
	DataGridPro,
	GRID_DETAIL_PANEL_TOGGLE_FIELD,
	useGridApiContext,
} from "@mui/x-data-grid-pro"
import { useQuery } from "@tanstack/react-query"
import PropTypes from "prop-types"
import * as React from "react"
import userStore from "src/store/userStore"

import useResponsive from "src/hooks/useResponsive"
import _ from "lodash"

function DetailPanelContent({ row: rowProps }) {
	const userState = userStore()

	const studentsData = useQuery(["students"], async () => {
		let users = []

		return users
	})

	return (
		<Box
			sx={{
				pt: 5,
				px: useResponsive("only", "sm") ? 1 : 3,
			}}
		>
			<Typography variant="body1" sx={{ fontWeight: 700 }}>
				Students
			</Typography>
			<DataGridPro
				density="compact"
				columns={[
					{ field: "firstName", headerName: "First Name", flex: 1 },
					{ field: "lastName", headerName: "Last Name", flex: 1 },
				]}
				rows={studentsData.data || []}
				autoHeight
				disableMultipleSelection
				hideFooterSelectedRowCount
			/>
		</Box>
	)
}

export default function FullWidthDetailPanel({ rows, ...props }) {
	const getDetailPanelContent = React.useCallback(
		({ row }) => <DetailPanelContent row={row} />,
		[]
	)

	const theme = useTheme()

	const columns = [
		{
			field: "class",
			headerName: "Classes",
			flex: 1,
			valueFormatter: (params) => _.upperFirst(params.value),
		},
	]

	return (
		<Paper elevation={9} sx={{ padding: "20px 20px 0" }}>
			<Box sx={{ width: "100%", height: "100%" }}>
				<DataGridPro
					columns={columns}
					rows={rows}
					rowThreshold={0}
					autoHeight
					getDetailPanelHeight={() => "auto"}
					getDetailPanelContent={getDetailPanelContent}
					disableMultipleSelection
					hideFooterSelectedRowCount
					{...props}
				/>
			</Box>
		</Paper>
	)
}
