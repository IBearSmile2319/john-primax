import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IMaterialManagementInitialState } from "./materialsManagement.interface";

const initialState: IMaterialManagementInitialState = {
  materialsManagement: [],
  isLoading: false,
  error: "",
};

export const materialsManagementSlice = createSlice({
  name: "materialsManagement",
  initialState,
  reducers: {
    // actions
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setMaterialsManagement: (
      state,
      action: PayloadAction<
        IMaterialManagementInitialState["materialsManagement"]
      >
    ) => {
      state.materialsManagement = action.payload;
      state.isLoading = false;
    },
    setError: (
      state,
      action: PayloadAction<IMaterialManagementInitialState["error"]>
    ) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setIsLoading, setMaterialsManagement, setError } =
  materialsManagementSlice.actions;
