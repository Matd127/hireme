import { createSlice } from "@reduxjs/toolkit";
import { DUMMY_JOBS } from "./DUMMY_JOBS";

const initialJobsState = {
  jobsList: DUMMY_JOBS,
  loading: false,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState: initialJobsState,
  reducers: {

  },

  extraReducers: (builder) => {

  }
});

export const jobsActions = jobsSlice.actions;
export default jobsSlice.reducer;
