import { Paper, useTheme } from "@mui/material"
import {
	DataGridPro,
	GridToolbarColumnsButton,
	GridToolbarContainer,
	GridToolbarDensitySelector,
	GridToolbarExport,
	GridToolbarFilterButton,
} from "@mui/x-data-grid-pro"
import React, { useEffect, useState } from "react"

//components

function GridToolbar(theme, setPopupState, isSelected) {
	return (
		<GridToolbarContainer
			sx={{
				backgroundColor: `#FFF!important`,
				borderRadius: 1,
				padding: "0 !important",
				marginBottom: "10px",
				".MuiButton-root": {
					marginBottom: "10px",
				},
				".MuiButton-text": {
					color: `${theme.palette.common.blue} !important`,
				},
			}}
		>
			<GridToolbarColumnsButton />
			<GridToolbarFilterButton />
			<GridToolbarDensitySelector />
			<GridToolbarExport />
		</GridToolbarContainer>
	)
}

const GridList = ({
	rows,
	columns,
	selected,
	setSelected,
	customToolbar,
	checkboxSelection = true,
	setDeleteState,
	sx,
	...props
}) => {
	const theme = useTheme()

	const [isSelected, setIsSelected] = useState(false)

	const [popupState, setPopupState] = useState(false)
	const [popupData, setPopupData] = useState({})

	// const id = open ? 'simple-popover' : undefined;

	useEffect(() => {
		if (setDeleteState) {
			isSelected ? setDeleteState(true) : setDeleteState(false)
		}
	}, [isSelected, setDeleteState])

	return (
		<React.Fragment>
			<Paper elevation={9} sx={{ padding: "20px 20px 0" }}>
				<DataGridPro
					rows={rows}
					columns={columns}
					components={{
						Toolbar: () => GridToolbar(theme, setPopupState, isSelected),
					}}
					autoHeight
					pageSize={10}
					rowsPerPageOptions={[10, 25, 50, 100]}
					pagination
					checkboxSelection={checkboxSelection}
					disableSelectionOnClick
					disableColumnMenu
					onSelectionModelChange={(ids) => {
						const selectedIds = ids.map((val) => {
							return { id: val }
						})
						setSelected(selectedIds)
						setIsSelected((oldVal) => (ids.length > 0 ? true : false))
					}}
					sx={{
						// '.MuiDataGrid-root': { marginBottom: 0 },
						".MuiDataGrid-columnHeaders": {
							backgroundColor: theme.palette.common.greyLight,
							borderRadius: 1,
						},
						".MuiDataGrid-columnHeaderTitle": {
							// textTransform: 'uppercase',
						},
						".MuiTablePagination-toolbar p": { marginBottom: 0 },
						".MuiTablePagination-toolbar div": { marginBottom: 0 },
						...sx,
					}}
					{...props}
				/>
			</Paper>
			{/* <Popup open={popupState} onClose={setPopupState} data={popupData} /> */}
		</React.Fragment>
	)
}

export default GridList
