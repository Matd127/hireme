import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { DUMMY_JOBS } from "./DUMMY_JOBS";

export const getJobs = createAsyncThunk("jobs/getJobs", async () => {
  const response = await fetch(
    "https://hireme-9f839-default-rtdb.europe-west1.firebasedatabase.app/jobs.json"
  );
  const data = await response.json();
  console.log(data)
  return data;
});

const initialJobsState = {
  jobsList: [],
  error: null,
  loading: false,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState: initialJobsState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getJobs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getJobs.fulfilled, (state, action) => {
      state.loading = false;
      state.jobsList = action.payload;
    });
    builder.addCase(getJobs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const jobsActions = jobsSlice.actions;
export default jobsSlice.reducer;
