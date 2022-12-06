import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IItemsInitialState } from "./items.interface";

const initialState: IItemsInitialState = {
  items: [],
  isLoading: false,
  error: "",
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    // actions

    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setItems: (state, action: PayloadAction<IItemsInitialState["items"]>) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    setError: (state, action: PayloadAction<IItemsInitialState["error"]>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setIsLoading, setItems, setError } = itemsSlice.actions;
