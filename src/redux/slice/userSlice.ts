import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Beneficiary } from "../../common/navigation/types";
import { RootState } from "../Store";

// Define a type for the slice state
export interface UserState {
  accountCurency: string;
  phoneNumber: string;
  fullName: string;
  firstName: string;
  lastName: string;
  pictureUrl: string | undefined;
  azaAccountNumber: number;
  azaBalance: number;
  emailAddress: string;
  accountVerified: boolean;
  accountStatus: string;
  transfers: {
    incommingTransferLimit: number;
    depositAmountLimit: number;
    totalMonthlySenders: number;
    totalMonthlyReceivers: number;
    totalMonthlyIncomingTransfers: number;
    totalMonthlyIncomingTransferAmount: number;
    totalMonthlyOutgoingTransfers: number;
    totalMonthlyOutgoingTransferAmount: number;
  };
  transactions: [];
  azaContacts: Beneficiary[];
}

// Define the initial state using that type
const initialState: UserState = {
  phoneNumber: "+2340011112222",
  fullName: "Test User",
  firstName: "Test",
  lastName: "User",
  pictureUrl: undefined,
  azaAccountNumber: 331234243,
  azaBalance: 0,
  emailAddress: "testuser@gmail.com",
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
  transactions: [],
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
});

export const { setUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
