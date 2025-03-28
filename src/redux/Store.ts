import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import newUserSlice from "./slice/newUserSlice";
import transactionSlice from "./slice/transactionSlice";
import userSlice from "./slice/userSlice";
import vaultSlice from "./slice/vaultslice";
import activityModalSlice from "./slice/activityModalSlice";
import themeSlice from "./slice/themeSlice";
import paymentSlice from "./slice/paymentSlice";
import bankSlice from "./slice/bankSlice";
import preferenceSlice from "./slice/preferenceSlice";

export const Store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    newUser: newUserSlice,
    vault: vaultSlice,
    transaction: transactionSlice,
    activityModal: activityModalSlice,
    theme: themeSlice,
    payment: paymentSlice,
    bank: bankSlice,
    preference: preferenceSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;
