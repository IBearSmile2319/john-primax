import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IRegOfConceptsInitialState } from "./regOfConcepts.interface";

const initialState: IRegOfConceptsInitialState = {
  regOfConcepts: [],
  selectedRegOfConcept: null,
  isLoading: false,
  error: "",
};

export const regOfConceptsSlice = createSlice({
  name: "regOfConcepts",
  initialState,
  reducers: {
    // actions
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setRegOfConcepts: (
      state,
      action: PayloadAction<IRegOfConceptsInitialState["regOfConcepts"]>
    ) => {
      state.regOfConcepts = action.payload;
      state.isLoading = false;
    },
    setSelectedRegOfConcept: (
      state,
      action: PayloadAction<IRegOfConceptsInitialState["selectedRegOfConcept"]>
    ) => {
      state.selectedRegOfConcept = action.payload;
      state.isLoading = false;
    },
    setError: (
      state,
      action: PayloadAction<IRegOfConceptsInitialState["error"]>
    ) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  setIsLoading,
  setRegOfConcepts,
  setError,
  setSelectedRegOfConcept,
} = regOfConceptsSlice.actions;
