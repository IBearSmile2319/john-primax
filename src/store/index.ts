import { configureStore } from "@reduxjs/toolkit";
import { itemsSlice } from "./items/items.slice";
import { materialsManagementSlice } from "./MaterialsManagement/materialsManagement.slice";
import { operationManagementSlice } from "./operationManagement/operationManagement.slice";
import { providersSlice } from "./providers/providers.slice";
import { purchaseOrdersSlice } from "./purchaseOrders/purchaseOrders.slice";
import { regOfConceptsSlice } from "./registrationOfConcepts/regOfConcepts.slice";
import { userOperationsSlice } from "./userOperations/userOperations.slice";
import { userSlice } from "./userSlice/user.slice";

export const store = configureStore({
  reducer: {
    // reducers
    user: userSlice.reducer,
    providers: providersSlice.reducer,
    regOfConcepts: regOfConceptsSlice.reducer,
    purchaseOrders: purchaseOrdersSlice.reducer,
    operationManagement: operationManagementSlice.reducer,
    userOperations: userOperationsSlice.reducer,
    materialsManagement: materialsManagementSlice.reducer,
    items: itemsSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
