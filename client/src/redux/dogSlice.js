import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	dogs: [],
	loading: true,
};

const dogSlice = createSlice({
	name: "dogs",
	initialState,
	reducers: {
        loading(state) {
            state.dogs = []
			state.loading = true
		},
		setAllDogs(state, action) {
			state.dogs = action.payload
			state.loading = false
		}
	},
});

export const fetchAllDogs = () => {
	return (dispatch) => {
		dispatch(loading());
		fetch("http://localhost:3001/dogs")
			.then((res) => res.json())
			.then((json) => {
				dispatch(setAllDogs(json));
			})
			.catch((e) => console.log(e));
	};
};

export const { setAllDogs, loading } = dogSlice.actions;

export default dogSlice.reducer;
