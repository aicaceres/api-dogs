import { configureStore } from "@reduxjs/toolkit";
// reducer
import dogs from './dogSlice'
import temperaments from './temperamentSlice'

const store = configureStore({
    reducer: {
        dogs,
        temperaments
    }
})
export default store;