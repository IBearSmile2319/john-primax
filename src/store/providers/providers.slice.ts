import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProviderInitialState } from "./providers.interface";

const initialState: IProviderInitialState = {
  providers: [],
  isLoading: false,
  error: "",
};

export const providersSlice = createSlice({
  name: "providers",
  initialState,
  reducers: {
    // actions
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setProviders: (
      state,
      action: PayloadAction<IProviderInitialState["providers"]>
    ) => {
      state.providers = action.payload;
      state.isLoading = false;
    },
    setError: (
      state,
      action: PayloadAction<IProviderInitialState["error"]>
    ) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setIsLoading, setProviders, setError } = providersSlice.actions;
