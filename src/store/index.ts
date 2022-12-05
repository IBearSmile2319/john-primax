import { configureStore } from "@reduxjs/toolkit";
import { providersSlice } from "./providers/providers.slice";
import { regOfConceptsSlice } from "./registrationOfConcepts/regOfConcepts.slice";
import { userSlice } from "./userSlice/user.slice";

export const store = configureStore({
  reducer: {
    // reducers
    user: userSlice.reducer,
    providers: providersSlice.reducer,
    regOfConcepts: regOfConceptsSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
