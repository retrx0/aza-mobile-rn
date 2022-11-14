import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { boolean, number } from "yup";
import api from "../../api";
import { Beneficiary } from "../../common/navigation/types";
import { RootState } from "../Store";
import { Transaction, UserState } from "../types";

// Define the initial state using that type
const initialState: UserState = {
  phoneNumber: "2348105982998",
  fullName: "Test User",
  firstName: "Test",
  lastName: "User",
  pictureUrl: undefined,
  azaAccountNumber: 331234243,
  azaBalance: 0,
  emailAddress: "faivegid@gmail.com",
  accountVerified: true,
  accountStatus: "Ok",
  transfers: {
    incommingTransferLimit: 0,
    depositAmountLimit: 0,
    totalMonthlySenders: 0,
    totalMonthlyReceivers: 0,
    totalMonthlyIncomingTransfers: 0,
    totalMonthlyIncomingTransferAmount: 0,
    totalMonthlyOutgoingTransfers: 0,
    totalMonthlyOutgoingTransferAmount: 0,
  },
  recentTransactions: { loading: false, data: [] },
  accountCurency: "NGN",
  azaContacts: [
    {
      azaAccountNumber: "12345678",
      fullName: "Test User2",
      firstName: "Test",
      lastName: "User2",
      phone: "234567890",
      pictureUrl: "",
      currency: "NGN",
      email: "testuser2@aza.com",
    },
    {
      azaAccountNumber: "12345679",
      fullName: "Test User3",
      firstName: "Test",
      lastName: "User4",
      phone: "234567890",
      pictureUrl: "",
      currency: "NGN",
      email: "testuser4@aza.com",
    },
    {
      azaAccountNumber: "12345610",
      fullName: "Test User4",
      firstName: "Test",
      lastName: "User4",
      phone: "234567890",
      pictureUrl: "",
      currency: "NGN",
      email: "testuser4@aza.com",
    },
  ],
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserTransactions.pending, (state, action) => {
        state.recentTransactions.loading = true;
      })
      .addCase(getUserTransactions.fulfilled, (state, action) => {
        state.recentTransactions.data = action.payload.payload;
      })
      .addCase(getUserTransactions.rejected, (state, action) => {
        state.recentTransactions.loading = false;
      });
  },
});

export const getUserTransactions = createAsyncThunk(
  "user/getTransactions",
  async (
    { accountNumber, token }: { accountNumber: number; token: string },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const result = await api.get(
        `/api/v1/account/${accountNumber}/trnasactions`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return fulfillWithValue(result.data);
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const { setUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
