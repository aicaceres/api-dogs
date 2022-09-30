import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	list: [],
	selected: "0",
}

const temperamentSlice = createSlice({
	name: "temperaments",
	initialState,
	reducers: {
		setAllTemperaments(state, action) {
			state.list = action.payload
		},
		setSelected(state, action) {
			state.selected = action.payload
		},
		clearTemperaments() {
			return {
				...initialState,
			}
		},
	},
})

export const fetchAllTemperaments = () => {
	return (dispatch) => {
		fetch("http://localhost:3001/temperaments")
			.then((res) => res.json())
			.then((json) => {
				dispatch(setAllTemperaments(json))
			})
			.catch((e) => console.log(e))
	}
}

export const { setAllTemperaments, setSelected, clearTemperaments } =
	temperamentSlice.actions

export default temperamentSlice.reducer
