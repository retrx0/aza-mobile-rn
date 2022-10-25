import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import newUserSlice from "./slice/newUserSlice";
import userSlice from "./slice/userSlice";

export const Store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    newUser: newUserSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;
