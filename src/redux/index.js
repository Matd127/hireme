import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobs-slice";
import categoryReducer from "./categories-slice";
import contactReducer from "./contact-slice";

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    categories: categoryReducer,
    contact: contactReducer,
  },
});

export default store;
