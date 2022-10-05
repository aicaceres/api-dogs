import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

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
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/temperaments")
            dispatch(setAllTemperaments(data))
        } catch (error) {
            console.log(error)
        }
	}
}

export const { setAllTemperaments, setSelected, clearTemperaments } =
	temperamentSlice.actions

export default temperamentSlice.reducer
