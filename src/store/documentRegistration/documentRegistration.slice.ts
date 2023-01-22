import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IDocumentRegistrationInitialState } from "./documentRegistration.interface";

const initialState: IDocumentRegistrationInitialState = {
  documentRegistration: [],
  selectedDocumentRegistration: null,
  isLoading: false,
  error: "",
};

export const documentRegistrationSlice = createSlice({
  name: "documentRegistration",
  initialState,
  reducers: {
    // actions
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setDocumentRegistration: (state, action: PayloadAction<IDocumentRegistrationInitialState["documentRegistration"]>) => {
      state.documentRegistration = action.payload;
      state.isLoading = false;
    },
    setSelectedDocumentRegistration: (state, action: PayloadAction<IDocumentRegistrationInitialState["selectedDocumentRegistration"]>) => {
        state.selectedDocumentRegistration = action.payload;
        state.isLoading = false;
    },
    setError: (state, action: PayloadAction<IDocumentRegistrationInitialState["error"]>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setIsLoading, setDocumentRegistration, setError, setSelectedDocumentRegistration } = documentRegistrationSlice.actions;
