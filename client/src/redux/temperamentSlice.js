import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	temperaments: [],
};

const temperamentSlice = createSlice({
	name: "temperaments",
	initialState,
	reducers: {
		setAllTemperaments(state, action) {
			state.temperaments = action.payload;
		},
	},
});

export const fetchAllTemperaments = () => {
	return (dispatch) => {
		fetch("http://localhost:3001/temperaments")
			.then((res) => res.json())
			.then((json) => {
				dispatch(setAllTemperaments(json));
			})
			.catch((e) => console.log(e));
	};
};

export const { setAllTemperaments } = temperamentSlice.actions;

export default temperamentSlice.reducer;
