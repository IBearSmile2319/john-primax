import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IUserOperationsInitialState } from "./userOperations.interface";

const initialState: IUserOperationsInitialState = {
  userOperations: [],
  isLoading: false,
  error: "",
};

export const userOperationsSlice = createSlice({
  name: "userOperations",
  initialState,
  reducers: {
    // actions
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setUserOperations: (
      state,
      action: PayloadAction<IUserOperationsInitialState["userOperations"]>
    ) => {
      state.userOperations = action.payload;
      state.isLoading = false;
    },
    setError: (
      state,
      action: PayloadAction<IUserOperationsInitialState["error"]>
    ) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setIsLoading, setUserOperations, setError } =
  userOperationsSlice.actions;
