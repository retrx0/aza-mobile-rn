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

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (props: any, { rejectWithValue, fulfillWithValue }) => {
    try {
      const result = await api.post("/api/v1/auth/login", {
        email: props.email,
        phoneNumber: props.phone,
        password: props.password,
      });
      return fulfillWithValue(result.data);
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(loginThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoggedIn = false;
    }),
      builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.error = "";
      });
  },
});

export const { logIn, logOut } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAuthIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export default authSlice.reducer;
