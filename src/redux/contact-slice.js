import { createSlice } from "@reduxjs/toolkit";
import { set, ref } from "firebase/database";
import { db } from "../firebase/config";

const initialContactState = {
  sent: false,
  success: false,
};

const contactSlice = createSlice({
  name: "contact",
  initialState: initialContactState,
  reducers: {
    sendMessage: (state, action) => {
      const data = action.payload;
      try {
        set(ref(db, "messages/" + Date.now()), data);
        state.success = true;
        state.sent = true;
      } catch (err) {
        state.sent = true;
        state.success = false;
      }
    },
  },
});

export const contactActions = contactSlice.actions;
export default contactSlice.reducer;
