import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../api";
import { RootState } from "../Store";

// Define a type for the slice state
interface AuthState {
  isLoggedIn: boolean;
  error: any;
}

// Define the initial state using that type
const initialState: AuthState = {
  isLoggedIn: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAuthIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export default authSlice.reducer;
