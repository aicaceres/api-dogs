import { createSlice } from "@reduxjs/toolkit"

// order: {
// 		type: "ALPHABETIC | WEIGHT"
// 		direction: "ASC | DESC"
// 	}
// source: "ALL | API | DB"

const initialOrder ={
		ALPHABETIC: "ASC",
		WEIGHT: "ASC",
	}

const initialState = {
	list: [],
	filtered: [],
	order: initialOrder,
	source: "ALL",
	detail: {},
	loading: true,
}

const dogSlice = createSlice({
	name: "dogs",
	initialState,
	reducers: {
		setLoading(state) {
			state.loading = true
		},
		setAllDogs(state, action) {
			state.list = action.payload
			state.filtered = action.payload
			state.loading = false
		},
		setDetail(state, action) {
			state.detail = action.payload
			state.loading = false
		},
		getBySource(state, action) {
			state.source = action.payload

			if (action.payload === "ALL") {
				state.filtered = state.list
			} else {
				state.filtered = state.list.filter((f) => f.source === state.source)
            }
            // reset order
            state.order = initialOrder
        },
        setOrder(state,action) {
            const params = action.payload
            const field = params.type === 'ALPHABETIC' ? 'name' : 'weightMin'
            const sortedArr =
				params.direction === "ASC"
					? [...state.filtered].sort((a, b) => (a[field] > b[field] ? 1 : -1))
                    : [...state.filtered].sort((a, b) => (b[field] > a[field] ? 1 : -1))
            const newOrder = {
                ALPHABETIC: params.type === 'ALPHABETIC' ? params.direction : 'ASC' ,
		        WEIGHT: params.type === 'WEIGHT' ? params.direction : 'ASC',
            }
			return {
                ...state,
                order: newOrder,
				filtered: sortedArr,
			}
        },
		setByName(state, action) {
			// apply source filter
			state.filtered =
				state.source === "ALL"
					? action.payload
                    : action.payload.filter((f) => f.source === state.source)
            state.loading = false
            // reset order
            state.order = initialOrder
		},
		setFilteredDogs(state, action) {
			state.filtered = action.payload
            state.loading = false
            // reset order
            state.order = initialOrder
        },
   		clearDetail(state) {
			state.detail = {}
		},
		clearFiltered(state) {
			state.filtered = []
		},
		clearDogs() {
			return {
				...initialState,
			}
		},
	},
})

export const getByTemperament = (selected) => {
	return (dispatch) => {
		dispatch(clearFiltered())
		dispatch(setLoading())
		fetch("http://localhost:3001/dogs")
			.then((res) => res.json())
			.then((json) => {
				const filtered =
					selected === "0"
						? json
						: json.filter((d) => d.temperament.includes(selected))
				dispatch(setFilteredDogs(filtered))
			})
			.catch((e) => console.log(e))
	}
}

export const fetchAllDogs = () => {
	return (dispatch) => {
		dispatch(setLoading())
		fetch("http://localhost:3001/dogs")
			.then((res) => res.json())
			.then((json) => {
				dispatch(setAllDogs(json))
			})
			.catch((e) => console.log(e))
	}
}

export const searchById = (id) => {
	return (dispatch) => {
		dispatch(setLoading())
		fetch(`http://localhost:3001/dogs/${id}`)
			.then((res) => res.json())
			.then((detail) => dispatch(setDetail(detail)))
			.catch((e) => console.log(e))
	}
}
export const searchByName = (name) => {
    return (dispatch) => {
        dispatch(setLoading())
		fetch(`http://localhost:3001/dogs?name=${name}`)
			.then((res) => res.json())
			.then((json) => dispatch(setByName(json)))
			.catch((e) => console.log(e))
	}
}

export const {
	setLoading,
	setAllDogs,
	setDetail,
	clearDetail,
	getBySource,
    setFilteredDogs,
    setByName,
	clearFiltered,
    clearDogs,
    setOrder,
} = dogSlice.actions

export default dogSlice.reducer
