import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
	list: []
}

const temperamentSlice = createSlice({
	name: "temperaments",
	initialState,
	reducers: {
		setAllTemperaments(state, action) {
			state.list = action.payload
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
            const { data } = await axios.get("/temperaments")
            dispatch(setAllTemperaments(data))
        } catch (error) {
            console.log(error.message)
        }
	}
}

export const { setAllTemperaments, clearTemperaments } =
	temperamentSlice.actions

export default temperamentSlice.reducer
