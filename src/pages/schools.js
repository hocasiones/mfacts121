import { Add, AddCircleOutline, Delete, Edit, List } from "@mui/icons-material"
import LoadingButton from "@mui/lab/LoadingButton"
import {
	Box,
	Button,
	Card,
	CardContent,
	Divider,
	Fab,
	IconButton,
	Popover,
	Stack,
	Typography,
	useTheme,
} from "@mui/material"
import { useMutation, useQuery } from "@tanstack/react-query"
import _ from "lodash"
import React, { useState } from "react"
import userStore from "src/store/userStore"
import ky from "ky"
import MainContainer from "src/components/MainContainer"
import Popup from "src/components/Popup"
import Title from "src/components/Title"
import GridTable from "src/components/grid/list"
import AddSchoolForm from "src/components/schools/addSchoolForm"
import EditSchoolForm from "src/components/schools/editSchoolForm"
import { Query, database } from "src/appwrite/config"

const Schools = () => {
	const theme = useTheme()
	const userState = userStore()

	const [actionState, setActionState] = useState(false)
	const [actionEl, setActionEl] = useState(null)
	const [deleteState, setDeleteState] = useState(false)
	const [selected, setSelected] = useState([])
	const [addPopupState, setAddPopupState] = useState(false)
	const [editPopupState, setEditPopupState] = useState(false)
	const [deletePopupState, setDeletePopupState] = useState(false)
	const [rows, setRows] = useState([])

	//test
	// useEffect(() => {
	//   console.log(selected);
	// }, [selected]);

	//query
	const queriedData = useQuery({
		queryKey: ["schools"],
		queryFn: async () => {
			const schools = await database.listDocuments("main", "schools", [
				Query.limit(100),
			])
			return schools
		},
		onSuccess: (data) => {
			setRows(
				data.documents.map((val) => {
					return { ...val, id: val.$id }
				})
			)
		},
		onError: (error) => {
			console.log(error)
		},
	})
	//mutation
	const deleteMutation = useMutation((ids) => {
		const promises = ids.map((id) => {
			return database.deleteDocument("main", "schools", id)
		})
		return Promise.all(promises)
	})

	const columns = [
		{
			field: "name",
			headerName: "School Name",
			flex: 1,
			renderCell: (params) => (
				<Box sx={{ cursor: "pointer", width: "100%" }}>
					{_.upperFirst(params.row.name)}
				</Box>
			),
		},
		{
			field: "Actions",
			// flex: 1,
			width: 100,
			renderCell: (params) => (
				<IconButton
					aria-label="Actions"
					onClick={(event) => {
						// console.log(params.row);
						setSelected([params.row])
						setActionEl(event.currentTarget)
						setActionState(true)
					}}
				>
					<List />
				</IconButton>
			),
		},
	]

	const ActionGroupButtons = (params) => (
		<Stack direction="row" spacing={1}>
			<Button
				variant="outlined"
				color="success"
				startIcon={<AddCircleOutline />}
				onClick={() => {
					setAddPopupState((prevState) => !prevState)
					setActionState(false)
					setActionEl(false)
				}}
			>
				ADD
			</Button>
			{deleteState && (
				<Button
					variant="outlined"
					color="error"
					startIcon={<Delete />}
					sx={{ color: `${theme.palette.common.red} !important` }}
					onClick={() => {
						setDeletePopupState(true)
					}}
				>
					Delete
				</Button>
			)}
		</Stack>
	)

	const ActionPopover = () => (
		<Popover
			open={actionState}
			anchorEl={actionEl}
			onClose={() => {
				setSelected([])
				setActionState(false)
			}}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "right",
			}}
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
		>
			<Card>
				<CardContent>
					<Stack spacing={1}>
						{/* <Button variant="contained" startIcon={<Preview />}>
              View
            </Button> */}
						<Button
							variant="contained"
							color="warning"
							startIcon={<Edit />}
							onClick={() => {
								setEditPopupState(true)
								setActionState(false)
							}}
						>
							Edit
						</Button>
						<Button
							variant="contained"
							color="error"
							startIcon={<Delete />}
							onClick={() => {
								setDeletePopupState(true)
								setActionState(false)
							}}
						>
							Delete
						</Button>
					</Stack>
				</CardContent>
			</Card>
		</Popover>
	)

	const DeleteConfirm = (params) => (
		<Stack>
			<Box>
				<Typography>Are you sure you want to DELETE the following?</Typography>
			</Box>
			<Stack direction="row" spacing={1}>
				<LoadingButton
					type="submit"
					variant="contained"
					color="error"
					// loading
					loadingPosition="center"
					sx={{ color: theme.palette.common.white }}
					onClick={() => {
						const selectedIds = selected.map((val) => val.id)
						deleteMutation.mutate(selectedIds, {
							onSuccess: (data) => {
								queriedData.refetch()
								userState.setNotice({
									color: "error",
									message: "School deleted successfully",
									enable: true,
								})
							},
						})
						queriedData.refetch()
						setDeletePopupState(false)
					}}
				>
					Delete
				</LoadingButton>
				<Button
					variant="outlined"
					color="warning"
					onClick={() => setDeletePopupState(false)}
				>
					Cancel
				</Button>
			</Stack>
		</Stack>
	)

	return (
		<React.Fragment>
			<MainContainer title="Schools">
				<Title>Schools</Title>
				<Divider sx={{ marginBottom: "30px" }} />
				<Stack spacing={2}>
					<Typography variant="body1">
						Nam nec laoreet massa. Mauris ullamcorper varius diam, at suscipit
						odio. Phasellus fringilla elit interdum lectus vulputate molestie.
						Duis imperdiet placerat ipsum vel accumsan. Donec nec urna suscipit,
						sagittis felis vitae, lacinia ex. Aliquam vitae ipsum ac mi lacinia
						egestas. Integer volutpat sodales erat, id sollicitudin sapien
						placerat semper. Integer ornare tincidunt facilisis.{" "}
					</Typography>
					<ActionGroupButtons />
					<GridTable
						rows={rows}
						columns={columns}
						setDeleteState={setDeleteState}
						selected={selected}
						setSelected={setSelected}
						loading={queriedData.isLoading}
					/>
				</Stack>
				{actionState && <ActionPopover />}
				<Popup
					open={addPopupState}
					onClose={() => setAddPopupState((prevState) => !prevState)}
					title={"Add School"}
				>
					<AddSchoolForm
						onClose={setAddPopupState}
						refetch={queriedData.refetch}
					/>
				</Popup>
				<Popup
					open={editPopupState}
					onClose={() => setEditPopupState((prevState) => !prevState)}
					title={"Edit School"}
				>
					<EditSchoolForm
						onClose={setEditPopupState}
						refetch={queriedData.refetch}
						selected={selected}
					/>
				</Popup>
				<Popup
					open={deletePopupState}
					onClose={() => setDeletePopupState((prevState) => !prevState)}
					title={"Confirm Deletion"}
					width="xs"
				>
					<DeleteConfirm
						onClose={setDeletePopupState}
						refetch={queriedData.refetch}
					/>
				</Popup>
			</MainContainer>
			<Fab
				color="primary"
				aria-label="add"
				sx={{ position: "fixed", zIndex: "999", bottom: "40px", right: "40px" }}
				onClick={() => {
					setAddPopupState((prevState) => !prevState)
				}}
			>
				<Add />
			</Fab>
		</React.Fragment>
	)
}

export default Schools
