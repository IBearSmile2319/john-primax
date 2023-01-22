import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { ISystemParametersInitialState } from "./systemParameter.interface";

const initialState: ISystemParametersInitialState = {
  systemParameters: [],
  selectedSystemParameters: null,
  isLoading: false,
  error: "",
};

export const systemParametersSlice = createSlice({
  name: "systemParameters",
  initialState,
  reducers: {
    // actions
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSystemParameters: (state, action: PayloadAction<ISystemParametersInitialState["systemParameters"]>) => {
      state.systemParameters = action.payload;
      state.isLoading = false;
    },
    setSelectedSystemParameters: (state, action: PayloadAction<ISystemParametersInitialState["selectedSystemParameters"]>) => {
      state.selectedSystemParameters = action.payload;
      state.isLoading = false;
    },
    setError: (state, action: PayloadAction<ISystemParametersInitialState["error"]>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setIsLoading, setSystemParameters, setError, setSelectedSystemParameters } = systemParametersSlice.actions;
