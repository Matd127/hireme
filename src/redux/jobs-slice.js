import { createSlice } from "@reduxjs/toolkit";
import { DUMMY_JOBS } from "./DUMMY_JOBS";

const initialJobsState = {
  jobsData: DUMMY_JOBS,
  foundJobs: DUMMY_JOBS,
  jobsCategories: [],
  featuredCategories: [],
  latestJobs: [],
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState: initialJobsState,
  reducers: {
    loadLatestJobs(state) {
      const filteredJobs = state.jobsData.slice(0, 3);
      state.latestJobs = filteredJobs;
    },

    loadFeaturedCategories(state) {
      const categories = new Set();
      state.jobsData.map((job) =>
        job.keywords.map((keyword) => categories.add(keyword))
      );
      state.jobsCategories = Array.from(categories).sort();
    },

    loadAllCategories(state) {
      const categories = new Map();
      state.jobsData.map((job) =>
        job.keywords.map((keyword) =>
          categories.has(keyword)
            ? categories.set(keyword, categories.get(keyword) + 1)
            : categories.set(keyword, 1)
        )
      );
      state.featuredCategories = Array.from(
        categories,
        ([category, amount]) => ({
          category,
          amount,
        })
      ).sort((a, b) => b.amount - a.amount);
    },

    findJob(state, action) {
      const { position, location, category } = action.payload;

      let filteredJobs = state.foundJobs;

      filteredJobs = state.jobsData
        .filter((job) => job.position.toLowerCase().includes(position ? position.toLowerCase() : ''))
        .filter((job) => job.location.toLowerCase().includes(location ? location.toLowerCase() : ''))
        .filter((job) => job.keywords.includes(category));

      if (!position && !location && !category)
        filteredJobs = initialJobsState.foundJobs;

        console.log(position, location, filteredJobs)
      state.foundJobs = filteredJobs;
    },
  },
});

export const jobsActions = jobsSlice.actions;
export default jobsSlice.reducer;
