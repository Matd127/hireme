import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { set, ref } from "firebase/database";
import { db } from "../firebase/config";

const url =
  "https://hireme-9f839-default-rtdb.europe-west1.firebasedatabase.app/jobs.json";

export const getJobs = createAsyncThunk("jobs/getJobs", async () => {
  const response = await fetch(url);
  const data = await response.json();
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
  reducers: {
    postJob: (_, action) => {
      const data = action.payload;
      try {
        set(ref(db, "jobs/" + data.id), data);
      } catch (err) {
        console.log(err);
      }
    },
  },

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
