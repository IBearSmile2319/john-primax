import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IPurchaseOrdersInitialState } from "./purchaseOrders.interface";

const initialState: IPurchaseOrdersInitialState = {
  purchaseOrders: [],
  selectedPurchaseOrder: null,
  isLoading: false,
  error: "",
};

export const purchaseOrdersSlice = createSlice({
  name: "purchaseOrders",
  initialState,
  reducers: {
    // actions
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setPurchaseOrders: (
      state,
      action: PayloadAction<IPurchaseOrdersInitialState["purchaseOrders"]>
    ) => {
      state.purchaseOrders = action.payload;
      state.isLoading = false;
    },
    setSelectedPurchaseOrder: (
      state,
      action: PayloadAction<
        IPurchaseOrdersInitialState["selectedPurchaseOrder"]
      >
    ) => {
      state.selectedPurchaseOrder = action.payload;
      state.isLoading = false;
    },
    setError: (
      state,
      action: PayloadAction<IPurchaseOrdersInitialState["error"]>
    ) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  setIsLoading,
  setPurchaseOrders,
  setError,
  setSelectedPurchaseOrder,
} = purchaseOrdersSlice.actions;
