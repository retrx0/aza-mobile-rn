import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../api";
import { RootState } from "../Store";
import { IBeneficiary } from "../types";

//TODO to be replaced with api call only!

// Define a type for the slice state

export interface TransactionState {
  beneficiary: IBeneficiary;
  amount: number;
  description?: string;
  transferType: "send" | "request" | "withdraw" | "debit";
}

// Define the initial state using that type
const initialState: TransactionState = {
  amount: 0,
  description: "",
  beneficiary: {
    azaAccountNumber: "",
    fullName: "",
    phone: "",
    currency: "NGN",
    email: "",
    firstName: "",
    lastName: "",
    pictureUrl: "",
  },
  transferType: "send",
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransaction: (state, action: PayloadAction<TransactionState>) => {
      state.amount = action.payload.amount;
      state.beneficiary = action.payload.beneficiary;
      state.transferType = action.payload.transferType;
      state.description = action.payload.description;
    },
    setTransactionAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
    setTransactionBeneficiary: (state, action: PayloadAction<IBeneficiary>) => {
      state.beneficiary = action.payload;
    },
    setTransactionBeneficairyAndAmount: (
      state,
      action: PayloadAction<{ amount: number; beneficiary: IBeneficiary }>
    ) => {
      state.amount = action.payload.amount;
      state.beneficiary = action.payload.beneficiary;
    },
    setTransactionDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setTransactionTransferType: (
      state,
      action: PayloadAction<"send" | "request">
    ) => {
      state.transferType = action.payload;
    },
  },
});

export const {
  setTransaction: setTransaction,
  setTransactionBeneficiary,
  setTransactionAmount,
  setTransactionTransferType,
  setTransactionBeneficairyAndAmount,
  setTransactionDescription,
} = transactionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTransaction = (state: RootState) => state.transaction;
export const selectTransactionBeneficiary = (state: RootState) =>
  state.transaction.beneficiary;
export const selectTransactionAmount = (state: RootState) =>
  state.transaction.amount;

export default transactionSlice.reducer;
