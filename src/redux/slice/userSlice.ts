import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../api";
import { Beneficiary } from "../../common/navigation/types";
import { RootState } from "../Store";

// Define a type for the slice state
export interface UserState {
  userResultLoading: boolean;
  accountCurency: string;
  phoneNumber: string;
  fullName: string;
  firstName: string;
  lastName: string;
  gender: string;
  pictureUrl: string | undefined;
  azaAccountNumber: number;
  azaBalance: number;
  emailAddress: string;
  accountVerified: boolean;
  accountStatus: string;
  bvn: number;
  dateOfBirth: string;
  lastLogin: string;
  emailConfirmed: boolean;
  bvnComfirmed: boolean;
  phoneNumberConfirmed: boolean;
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
  userResultLoading: false,
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
  gender: "",
  bvn: 0,
  dateOfBirth: "",
  lastLogin: "",
  emailConfirmed: false,
  bvnComfirmed: false,
  phoneNumberConfirmed: false,
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
    setUserTransactions: (state, action: PayloadAction<any>) => {
      state.transactions = action.payload;
    },
    setUserAzaContacts: (state, action: PayloadAction<any>) => {
      state.azaContacts = action.payload;
    },
    setUserPictureUrl: (state, action: PayloadAction<string>) => {
      state.pictureUrl = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.pending, (state: UserState) => {
        state.userResultLoading = true;
      })
      .addCase(getUserInfo.fulfilled, (state: UserState, { payload }) => {
        state.userResultLoading = false;

        /// TODO: Might map items separately here if user is not oin full state!
        state.emailAddress = payload;
        state.emailConfirmed = payload;
        // ...
      })
      .addCase(getUserInfo.rejected, (state: UserState) => {
        state.userResultLoading = false;
      });
  },
});

export const { setUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;
export const selectUserPictureUrl = (state: RootState) => state.user.pictureUrl;
export const selectUserTransactions = (state: RootState) =>
  state.user.transactions;
export const selectUserAzaContacts = (state: RootState) =>
  state.user.azaContacts;

// async call to update or get user info
export const getUserInfo = createAsyncThunk("user/info", async () => {
  //get secured token
  const token = "";
  return api
    .get("/api/v1/user/info", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(
      (response) => {
        console.log(response.data);
        return response.data;
      },
      (error) => {
        console.log(error);
      }
    );
});

export default userSlice.reducer;
