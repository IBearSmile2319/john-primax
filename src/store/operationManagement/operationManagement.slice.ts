import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IOperationManagementInitialState } from "./operationManagement.interface";

const initialState: IOperationManagementInitialState = {
  operationManagement: [],
  isLoading: false,
  error: "",
};

export const operationManagementSlice = createSlice({
  name: "operationManagement",
  initialState,
  reducers: {
    // actions
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setOperationManagement: (
      state,
      action: PayloadAction<
        IOperationManagementInitialState["operationManagement"]
      >
    ) => {
      state.operationManagement = action.payload;
      state.isLoading = false;
    },
    setError: (
      state,
      action: PayloadAction<IOperationManagementInitialState["error"]>
    ) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
    setIsLoading,
    setOperationManagement,
    setError,
} = operationManagementSlice.actions;
