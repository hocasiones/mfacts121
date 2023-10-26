import { create } from "zustand"
import { persist } from "zustand/middleware"
import { mountStoreDevtool } from "simple-zustand-devtools"

// define the store
let userStore = (set) => ({
	Auth: null,
	setAuth: (newVal) => set((state) => ({ Auth: newVal })),
	User: null,
	setUser: (newVal) => set(() => ({ User: newVal })),
	remember: false,
	setRemember: (newVal) => set(() => ({ remember: newVal })),
	noticeDefault: {
		enable: false,
		message: "",
		duration: 4000,
		color: "success",
	},
	notice: { enable: false, message: "", duration: 4000, color: "success" },
	setNotice: (newVal) =>
		set((state) => ({ notice: { ...state.notice, ...newVal } })),
	practicePassed: 0,
	incrementPracticePassed: (newVal) =>
		set((state) => ({ practicePassed: state.practicePassed + 1 })),
	setPracticePassed: (newVal) => set(() => ({ practicePassed: newVal })),
})

// persist the created state
userStore = persist(userStore, { name: "userState" })

userStore = create(userStore)

if (process.env.NODE_ENV === "development") {
	mountStoreDevtool("Store", userStore)
}

export default userStore
