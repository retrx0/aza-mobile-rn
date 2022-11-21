import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../api";
import { RootState } from "../Store";

// Define a type for the slice state
interface ThirdPartyAuthState {
  loading: boolean;
  verified: boolean;
  emailAddress: string;
  pictureUrl?: string;
  firstName: string;
  lastName: string;
}

// Define the initial state using that type
const initialState: ThirdPartyAuthState = {
  loading: false,
  verified: false,
  emailAddress: "",
  firstName: "",
  lastName: "",
};

export const getThirdPartyUserInfo = createAsyncThunk(
  "auth/login",
  async (props: any, { rejectWithValue, fulfillWithValue }) => {
    try {
      const result = null;
      return fulfillWithValue(result);
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const authSlice = createSlice({
  name: "thirdPartyAuth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setThirdPartyAuthState: (state) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getThirdPartyUserInfo.rejected, (state, { payload }) => {}),
      builder.addCase(
        getThirdPartyUserInfo.fulfilled,
        (state, { payload }) => {}
      );
  },
});

export const { setThirdPartyAuthState } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAuthIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export default authSlice.reducer;
