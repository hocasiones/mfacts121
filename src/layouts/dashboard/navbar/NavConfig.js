//icons
import {
	Dashboard,
	People,
	CollectionsBookmark,
	PlayCircleOutline,
	LocalLibrary,
	Speed,
	Quiz,
	Person,
	Face,
	Face2,
	Class,
	Grading,
	School,
	Assessment,
} from "@mui/icons-material"
import { useRouter } from "next/router"

const useNavConfig = () => {
	const router = useRouter()

	const adminNav = [
		// Super Admin
		// ----------------------------------------------------------------------
		{
			subheader: "Super Admin",
			items: [
				{ title: "Dashboard", path: "/dashboard", icon: <Dashboard /> },
				{
					title: "Schools",
					path: "/schools",
					icon: <School />,
				},
				{ title: "Classes", path: `/classes/`, icon: <Class /> },
				{
					title: "Users",
					path: "/users",
					icon: <People />,
				},
				{
					title: "Assessments",
					path: "/assessments",
					icon: <Assessment />,
				},
				{
					title: "Curriculum",
					path: "/curriculum",
					icon: <CollectionsBookmark />,
					children: [
						{ title: "Curriculum", path: "/curriculum" },
						{
							title: "Prerequisite Skills",
							path: `${router.basePath}/assets/pdf/Teacher-Talk-and-Prerequitsite-Skills-2019.pdf`,
						},
						{ title: "Year 3", path: "/curriculum/year-3" },
						{ title: "Year 4", path: "/curriculum/year-4" },
						{ title: "Year 5/6", path: "/curriculum/year-5-6" },
						{
							title: "Four Mfacts121 Levels",
							path: "/curriculum/four-mfacts121-levels",
						},
						{
							title: "Printable Resources",
							path: "/curriculum/printable-resources",
						},
						{
							title: "Parents As Partners",
							path: "/curriculum/parents-as-partners",
						},
					],
				},
				{
					title: "Videos",
					path: "/videos",
					icon: <PlayCircleOutline />,
					children: [
						{ title: "Strategy Videos", path: "/videos/strategy-videos" },
						{ title: "Teacher Videos", path: "/videos/teacher-videos" },
						{ title: "Parent Videos", path: "/videos/parent-videos" },
						{ title: "Videos Lessons", path: "/videos/videos-lessons" },
					],
				},
				{
					title: "Self Directed Learning",
					path: "/self-directed-learning",
					icon: <LocalLibrary />,
					children: [
						{
							title: "Self Directed Learning",
							path: "/self-directed-learning",
						},
					],
				},
				{ title: "Online Practise", path: "/online-practise", icon: <Speed /> },
				{
					title: "Online Assessment",
					path: `/online-assessment`,
					icon: <Quiz />,
				},
			],
		},
	]
	const schoolNav = [
		// School Admin
		// ----------------------------------------------------------------------
		{
			subheader: "School Admin",
			items: [
				{ title: "Dashboard", path: "/dashboard", icon: <Dashboard /> },
				// { title: 'Account', path: '/account', icon: <Person /> },
				{ title: "Classes", path: `/classes/`, icon: <Class /> },
				{
					title: "Teachers",
					path: `/teachers/`,
					icon: <Face2 />,
				},
				{
					title: "Students",
					path: `/students/`,
					icon: <Face />,
				},
				{ title: "Results", path: "/results", icon: <Grading /> },
				{
					title: "Curriculum",
					path: "/curriculum",
					icon: <CollectionsBookmark />,
					children: [
						{ title: "Curriculum", path: "/curriculum" },
						{
							title: "Prerequisite Skills",
							path: `${router.basePath}/assets/pdf/Teacher-Talk-and-Prerequitsite-Skills-2019.pdf`,
						},
						{ title: "Year 3", path: "/curriculum/year-3" },
						{ title: "Year 4", path: "/curriculum/year-4" },
						{ title: "Year 5/6", path: "/curriculum/year-5-6" },
						{
							title: "Four Mfacts121 Levels",
							path: "/curriculum/four-mfacts121-levels",
						},
						{
							title: "Printable Resources",
							path: "/curriculum/printable-resources",
						},
						{
							title: "Parents As Partners",
							path: "/curriculum/parents-as-partners",
						},
					],
				},
				{
					title: "Videos",
					path: "/videos/strategy-videos",
					icon: <PlayCircleOutline />,
					children: [
						{ title: "Strategy Videos", path: "/videos/strategy-videos" },
						{ title: "Teacher Videos", path: "/videos/teacher-videos" },
						{ title: "Parent Videos", path: "/videos/parent-videos" },
						{ title: "Videos Lessons", path: "/videos/videos-lessons" },
					],
				},
				{
					title: "Self Directed Learning",
					path: "/self-directed-learning",
					icon: <LocalLibrary />,
					children: [
						{
							title: "Self Directed Learning",
							path: "/self-directed-learning",
						},
					],
				},
				{ title: "Online Practise", path: "/online-practise", icon: <Speed /> },
				{
					title: "Online Assessment",
					path: `/online-assessment`,
					icon: <Quiz />,
				},
			],
		},
	]
	const teacherNav = [
		// Teacher
		// ----------------------------------------------------------------------
		{
			subheader: "Teacher",
			items: [
				{ title: "Dashboard", path: "/dashboard", icon: <Dashboard /> },
				// { title: 'Account', path: '/account', icon: <Person /> },
				{
					title: "My Class",
					path: `/classes/`,
					icon: <Class />,
				},
				{
					title: "Students",
					path: `/students/`,
					icon: <Face />,
				},
				{ title: "Results", path: "/results", icon: <Grading /> },
				{
					title: "Curriculum",
					path: "/curriculum",
					icon: <CollectionsBookmark />,
					children: [
						{ title: "Curriculum", path: "/curriculum" },
						{
							title: "Prerequisite Skills",
							path: `${router.basePath}/assets/pdf/Teacher-Talk-and-Prerequitsite-Skills-2019.pdf`,
						},
						{ title: "Year 3", path: "/curriculum/year-3" },
						{ title: "Year 4", path: "/curriculum/year-4" },
						{ title: "Year 5/6", path: "/curriculum/year-5-6" },
						{
							title: "Four Mfacts121 Levels",
							path: "/curriculum/four-mfacts121-levels",
						},
						{
							title: "Printable Resources",
							path: "/curriculum/printable-resources",
						},
						{
							title: "Parents As Partners",
							path: "/curriculum/parents-as-partners",
						},
					],
				},
				{
					title: "Videos",
					path: "/videos/strategy-videos",
					icon: <PlayCircleOutline />,
					children: [
						{ title: "Strategy Videos", path: "/videos/strategy-videos" },
						{ title: "Teacher Videos", path: "/videos/teacher-videos" },
						{ title: "Parent Videos", path: "/videos/parent-videos" },
						{ title: "Videos Lessons", path: "/videos/videos-lessons" },
					],
				},
				{
					title: "Self Directed Learning",
					path: "/self-directed-learning",
					icon: <LocalLibrary />,
					children: [
						{
							title: "Self Directed Learning",
							path: "/self-directed-learning",
						},
					],
				},
				{ title: "Online Practise", path: "/online-practise", icon: <Speed /> },
				{
					title: "Online Assessment",
					path: `/online-assessment`,
					icon: <Quiz />,
				},
			],
		},
	]
	const studentNav = [
		// Student
		// ----------------------------------------------------------------------
		{
			subheader: "Student",
			items: [
				{ title: "Dashboard", path: "/dashboard", icon: <Dashboard /> },
				// { title: 'Account', path: '/account', icon: <Person /> },
				{ title: "My Progress", path: "/results", icon: <Grading /> },
				{ title: "My Rewards", path: "/rewards" },
				{
					title: "Videos",
					path: "/videos/strategy-videos",
					icon: <PlayCircleOutline />,
					children: [
						{ title: "Strategy Videos", path: "/videos/strategy-videos" },
						{ title: "Teacher Videos", path: "/videos/teacher-videos" },
						{ title: "Parent Videos", path: "/videos/parent-videos" },
						{ title: "Videos Lessons", path: "/videos/videos-lessons" },
					],
				},
				{
					title: "Self Directed Learning",
					path: "/self-directed-learning",
					icon: <LocalLibrary />,
					children: [
						{
							title: "Self Directed Learning",
							path: "/self-directed-learning",
						},
					],
				},
				{ title: "Online Practise", path: "/online-practise", icon: <Speed /> },
				{
					title: "Online Assessment",
					path: `/online-assessment`,
					icon: <Quiz />,
				},
			],
		},
	]

	return { adminNav, schoolNav, teacherNav, studentNav }
}

export default useNavConfig
