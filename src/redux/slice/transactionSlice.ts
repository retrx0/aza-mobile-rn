import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../api";
import { Beneficiary } from "../../common/navigation/types";
import { RootState } from "../Store";

//TODO to be replaced with api call only!

// Define a type for the slice state

export interface TransactionState {
  beneficairy: Beneficiary;
  amount: number;
  description?: string;
  transferType: "send" | "request";
}

// Define the initial state using that type
const initialState: TransactionState = {
  amount: 0,
  description: "enjoy this",
  beneficairy: {
    azaAccountNumber: "000000111",
    fullName: "Test User",
    phone: "23456789",
    currency: "NGN",
    email: "testuser@aza.com",
    firstName: "Test",
    lastName: "User",
    pictureUrl: "",
  },
  transferType: "send",
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransaction: (state, action: PayloadAction<TransactionState>) => {
      state = action.payload;
    },
  },
});

export const { setTransaction: setTransaction } = transactionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTransaction = (state: RootState) => state.transaction;

export default transactionSlice.reducer;
