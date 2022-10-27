import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../api";
import { Beneficiary } from "../../common/navigation/types";
import { RootState } from "../Store";

//TODO to be replaced with api call only!

// Define a type for the slice state
interface TransferState {
  sourceAccount?: string;
  destinationAccount?: string;
  amount: number;
  destinationPhoneNumber?: string;
  sourceChannel: number;
  destinationChannel: number;
  description?: string;
  currency: string;
}

export interface TransferToState {
  beneficairy: Beneficiary;
  amount: number;
  description?: string;
  transferType: "normal" | "recurring";
}

// Define the initial state using that type
const initialState: TransferToState = {
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
  transferType: "normal",
};

export const transferToSlice = createSlice({
  name: "transferTo",
  initialState,
  reducers: {
    setTransferTo: (state, action: PayloadAction<TransferToState>) => {
      state = action.payload;
    },
  },
});

export const { setTransferTo } = transferToSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTransferTo = (state: RootState) => state.transferTo;

export default transferToSlice.reducer;
