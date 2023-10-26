import {
	Add,
	AddCircleOutline,
	Delete,
	Edit,
	List,
	Preview,
} from "@mui/icons-material"
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
import React, { useEffect, useState } from "react"
import userStore from "src/store/userStore"
import Link from "next/link"
import { useRouter } from "next/router"
import MainContainer from "src/components/MainContainer"
import Popup from "src/components/Popup"
import Title from "src/components/Title"
import GridTable from "src/components/grid/list"
import AddStudentForm from "src/components/student/addStudentForm"
import EditStudentForm from "src/components/users/editUserForm"
import ky from "ky"
import { Query, database } from "src/appwrite/config"

const Students = () => {
	const theme = useTheme()
	const userState = userStore()
	const router = useRouter()

	const [actionState, setActionState] = useState(false)
	const [actionEl, setActionEl] = useState(null)
	const [deleteState, setDeleteState] = useState(false)
	const [selected, setSelected] = useState([])
	const [addPopupState, setAddPopupState] = useState(false)
	const [editPopupState, setEditPopupState] = useState(false)
	const [deletePopupState, setDeletePopupState] = useState(false)
	const [rows, setRows] = useState([])
	const [userStateLoaded, setUserStateLoaded] = useState(false)

	//test
	// useEffect(() => {
	//   console.log(selected);
	// }, [selected]);

	//fix hydration error
	useEffect(() => {
		if (userState) {
			setUserStateLoaded(true)
		}
	}, [userState])

	//query
	const queriedData = useQuery({
		queryKey: ["students"],
		queryFn: async () => {
			if (
				userState.User.role === "schooladmin" ||
				userState.User.role === "teacher"
			)
				return await database.listDocuments("main", "users", [
					Query.limit(100),
					Query.equal("role", "student"),
					Query.equal("schools", userState.User.schools.$id),
				])

			return await database.listDocuments("main", "users", [
				Query.limit(100),
				Query.equal("role", "student"),
			])
		},
		onSuccess: (data) => {
			// console.log(data)
			setRows(data.documents.map((el) => ({ ...el, id: el.$id })))
		},
		onError: (error) => {
			console.log(error)
		},
	})

	//mutation
	const deleteMutation = useMutation({
		mutationFn: async (ids) => {
			const promises = ids.map(async (id) => {
				const users = await ky
					.post("/api/users/delete", { json: { id: id } })
					.json()
				const userDB = await database.deleteDocument("main", "users", id)
				return userDB
			})
			return await Promise.all(promises)
		},
		onSuccess: (data) => {
			userState.setNotice({
				enable: true,
				color: "error",
				message: "User(s) deleted successfully",
			})
			queriedData.refetch()
		},
	})

	const columns = [
		{
			field: "firstName",
			headerName: "First Name",
			flex: 1,
			renderCell: (params) => (
				<Link href={`/students/${params.id}`}>
					<Box sx={{ cursor: "pointer", width: "100%" }}>
						{_.upperFirst(params.row.firstName)}
					</Box>
				</Link>
			),
		},
		{
			field: "lastName",
			headerName: "Last Name",
			flex: 1,
			valueFormatter: (params) => _.upperFirst(params.value),
			renderCell: (params) => (
				<Link href={`/students/${params.id}`}>
					<Box sx={{ cursor: "pointer", width: "100%" }}>
						{_.upperFirst(params.row.lastName)}
					</Box>
				</Link>
			),
		},
		{
			field: "classes",
			headerName: "Classes",
			flex: 1,
			valueFormatter: (params) =>
				params.value.map((item) => item.name).join(", "),
		},
		{
			field: "Actions",
			// flex: 0.5,
			width: 100,
			renderCell: (params) => (
				<IconButton
					aria-label="Actions"
					onClick={(event) => {
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
			{userStateLoaded && userState.User?.role !== "Teacher" && (
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
			)}

			{userState?.User?.role !== "teacher" && deleteState && (
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
						{/* <Button
							variant="contained"
							color="success"
							startIcon={<Preview />}
							onClick={() => {
								setActionState(false)
								router.push(`/students/${selected[0].id}`)
							}}
						>
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
						{userState.User.role !== "teacher" && (
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
						)}
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
			<MainContainer title="Students">
				<Title>Students</Title>
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
					title={"Add Student"}
				>
					<AddStudentForm
						onClose={setAddPopupState}
						refetch={queriedData.refetch}
					/>
				</Popup>
				<Popup
					open={editPopupState}
					onClose={() => setEditPopupState((prevState) => !prevState)}
					title={"Edit Student"}
				>
					<EditStudentForm
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
			{userStateLoaded && userState.User?.role !== "Teacher" && (
				<Fab
					color="primary"
					aria-label="add"
					sx={{
						position: "fixed",
						zIndex: "999",
						bottom: "40px",
						right: "40px",
					}}
					onClick={() => {
						setAddPopupState((prevState) => !prevState)
					}}
				>
					<Add />
				</Fab>
			)}
		</React.Fragment>
	)
}

export default Students
