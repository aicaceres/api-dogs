import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

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
    currentPage: 1,
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
		setCurrentPage(state,action) {
			state.currentPage = action.payload
		},
		setAllDogs(state, action) {
			state.list = action.payload
            state.filtered = action.payload
            state.currentPage = 1
			state.loading = false
        },
        setFilteredDogs(state, action) {
			state.filtered = action.payload
            state.loading = false
            // reset order and pagination
            state.order = initialOrder
            state.currentPage = 1
        },
		setDetail(state, action) {
			state.detail = action.payload
			state.loading = false
        },
        setSource(state, action) {
            state.source = action.payload
        },
		getBySource(state, action) {
			state.source = action.payload
            // apply source filter
			if (action.payload === "ALL") {
				state.filtered = state.list
			} else {
				state.filtered = state.list.filter((f) => f.source === state.source)
            }
            // reset order and pagination
            state.order = initialOrder
            state.currentPage = 1
        },
        setOrder(state,action) {
            const { type, direction } = action.payload
             let sortedArr = []
            if (type === 'ALPHABETIC') {
                sortedArr =
				direction === "ASC"
					? [...state.filtered].sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
                    : [...state.filtered].sort((a, b) => (b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1))
            } else {
                sortedArr =
				direction === "ASC"
					? [...state.filtered].sort((a, b) => (a.weightMin > b.weightMin ? 1 : -1))
                    : [...state.filtered].sort((a, b) => (b.weightMin > a.weightMin ? 1 : -1))
            }
            // update order state
            const newOrder = {
                ALPHABETIC: type === 'ALPHABETIC' ? direction : 'ASC',
                WEIGHT: type === 'WEIGHT' ? direction : 'ASC',
            }
			return {
                ...state,
                order: newOrder,
                filtered: sortedArr,
                currentPage: 1
			}
        },
		setByName(state, action) {
			// apply source filter
			state.filtered =
				state.source === "ALL"
					? action.payload
                    : action.payload.filter((f) => f.source === state.source)
            state.loading = false
            // reset order and pagination
            state.order = initialOrder
            state.currentPage = 1
        },
   		clearDetail(state) {
			state.detail = {}
		},
		clearFiltered(state) {
            state.filtered = []
            // reset order and pagination
            state.order = initialOrder
            state.currentPage = 1
		},
		clearDogs() {
			return {
				...initialState,
			}
		},
	},
})

// load all dogs from API and database
export const fetchAllDogs = () => {
    return async (dispatch) => {
        try {
            dispatch(setLoading())
            const { data } = await axios.get("http://localhost:3001/dogs")
            await dispatch(setAllDogs(data))
        } catch (error) {
            console.error('fetchAllDogs:',error)
        }
	}
}
// search by Id and fill detail
export const searchById = (id) => {
	return async (dispatch) => {
		try {
			dispatch(setLoading())
			const { data } = await axios.get(`http://localhost:3001/dogs/${id}`)
			dispatch(setDetail(data))
		} catch (error) {
			console.error("searchById:", error)
		}
	}
}
// search by name
export const searchByName = (name) => {
	return async (dispatch) => {
		try {
			dispatch(setLoading())
			const { data } = await axios.get(
				`http://localhost:3001/dogs?name=${name}`
			)
			dispatch(setByName(data))
		} catch (error) {
			console.error("searchByName: ", error)
		}
	}
}
// filter by Temperament
export const getByTemperament = (selected) => {
	return async (dispatch) => {
		try {
			dispatch(clearFiltered())
			dispatch(setLoading())
			const { data } = await axios.get("http://localhost:3001/dogs")
			const filtered =
				await selected === "0"
					? data
					: data.filter((d) => d.temperament.includes(selected))
			dispatch(setFilteredDogs(filtered))
		} catch (error) {
			console.error('getByTemperament:',error)
		}
	}
}
// create new breed
export const postNewBreed = (formData) => {
	return async (dispatch) => {
		try {
            await axios.post("http://localhost:3001/dogs", formData)
            const { data } = await axios.get("http://localhost:3001/dogs")
            await dispatch(setAllDogs(data))
		} catch (error) {
			console.error("postNewBreed:", error)
		}
	}
}

export const {
    setLoading,
    setCurrentPage,
	setAllDogs,
	setDetail,
	clearDetail,
	getBySource,
    setFilteredDogs,
    setByName,
	clearFiltered,
    clearDogs,
    setOrder,
    setSource
} = dogSlice.actions

export default dogSlice.reducer
