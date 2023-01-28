import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../api";
import { RootState } from "../Store";
import { IBeneficiary } from "../types";

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

export interface TransferObject {
  beneficairy: IBeneficiary;
  amount: number;
  description: string;
  transferType: "normal" | "recurring";
}

interface IRecurringTransferState {
  sourceAccount?: string;
  receivingAccount?: string;
  amount: number;
  currency: string;
  recevingChannel: number;
  duration: number;
  specificDay: number;
  frequency: number;
  startDate: Date;
}

// Define the initial state using that type
const initialState: TransferState = {
  amount: 0,
  sourceChannel: 0,
  destinationChannel: 0,
  currency: "NGN",
};

export const transferSlice = createSlice({
  name: "transfer",
  initialState,
  reducers: {
    withdrawal: (state, action: PayloadAction<TransferState>) => {},
    transfer: (state, action: PayloadAction<TransferState>) => {},
    deposit: (state, action: PayloadAction<TransferState>) => {},
  },
});

export const transferThunk = createAsyncThunk(
  "transfer",
  async (props: TransferState) => {
    api
      .post("/api/v1/payment/transfer", {
        amount: props.amount,
        sourceChannel: props.sourceChannel,
        destinationChannel: props.destinationChannel,
        currency: props.currency,
        description: props.description,
        destinationPhoneNumber: props.destinationPhoneNumber,
        sourceAccount: props.sourceAccount,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
);

export const requestThunk = createAsyncThunk(
  "transfer",
  async (props: TransferState) => {
    api
      .post("/api/v1/payment/request", {
        amount: props.amount,
        sourceChannel: props.sourceChannel,
        destinationChannel: props.destinationChannel,
        currency: props.currency,
        description: props.description,
        intiatorAccount: "string",
        receipientAccount: "string",
        recepientPhoneNumber: "string",
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
);

export const recurringTransferThunk = createAsyncThunk(
  "transfer",
  async (props: IRecurringTransferState) => {
    api
      .post("/api/v1/payment/recurring", {
        amount: props.amount,
        currency: props.currency,
        sourceAccount: props.sourceAccount,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
);
export const { withdrawal, transfer, deposit } = transferSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default transferSlice.reducer;
