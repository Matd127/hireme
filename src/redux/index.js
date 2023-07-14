import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from './jobs-slice'
import categoryReducer from './categories-slice'

const store = configureStore({
    reducer: {
        jobs: jobsReducer,
        categories: categoryReducer
    }
})

export default store;