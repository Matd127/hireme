import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
  "categories/getCategories", async () => {
    const response = await fetch(
      "https://hireme-9f839-default-rtdb.europe-west1.firebasedatabase.app/categories.json"
    );
    const data = await response.json();
    return data;
  }
);

const initialState = {
  categoriesList: [],
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categoriesList = action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default categoriesSlice.reducer;
