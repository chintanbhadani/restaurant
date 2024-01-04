import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BaseState } from "../../helper/interface";

const initialState: BaseState = { token: null };

const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const { setToken } = baseSlice.actions;

export default baseSlice.reducer;
