import { createSlice } from "@reduxjs/toolkit";
import { DUMMY_JOBS } from "./DUMMY_JOBS";

const initialJobsState = {
    items: DUMMY_JOBS
}

const jobsSlice = createSlice({
  name: "jobs",
  initialState: initialJobsState,
  reducers: {
    findTopThreeJobs(state) {
      const filteredJobs = state.items.slice(0,3)
      state.items = filteredJobs
    },

    findJob(state, action) {
      // const jobProperties = action.payload;
      const existingJobs = state.jobs.find((job) => job.company === "Google");
      return existingJobs;
    },
  },
});

export const jobsActions = jobsSlice.actions;
export default jobsSlice.reducer;
