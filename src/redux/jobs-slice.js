import { createSlice } from "@reduxjs/toolkit";
import { DUMMY_JOBS } from "./DUMMY_JOBS";

const initialJobsState = {
  items: DUMMY_JOBS,
  bestItems: []
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState: initialJobsState,
  reducers: {
    findTopThreeJobs(state) {
      const filteredJobs = state.items.slice(0, 3);
      state.items = filteredJobs;
    },

    findJob(state, action) {
      const { position, location, category } = action.payload;

      if (position) {
        state.items = state.items.filter((items) =>
          items.position.toLowerCase().includes(position.toLowerCase())
        );
      }
      
      if(location) {

      }

      if(category) {

      }
    },
  },
});

export const jobsActions = jobsSlice.actions;
export default jobsSlice.reducer;
