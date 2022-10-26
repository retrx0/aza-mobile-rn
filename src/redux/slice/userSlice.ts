import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCurrencyUnicode } from "../../common/util/AppUtil";
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
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
<<<<<<< HEAD
    // Use the PayloadAction type to declare the contents of `action.payload`
    setPhone: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.emailAddress = action.payload;
    },
    setUser: (state, action: PayloadAction<UserState>) => {
      state.fullName = action.payload.fullName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.emailAddress = action.payload.emailAddress;
      state.azaAccountNumber = action.payload.azaAccountNumber;
      state.azaBalance = action.payload.azaBalance;
   

});

export const {
  setPhone,
  setFirstName,
  setLastName,
  setEmail,
  setFullName,
  setUser,
} = userSlice.actions;

export const { setUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
