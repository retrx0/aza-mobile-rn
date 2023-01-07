import { STORAGE_KEY_JWT_TOKEN } from "@env";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { boolean, number } from "yup";
import api from "../../api";
import { Beneficiary } from "../../common/navigation/types";
import { getItemSecure } from "../../common/util/StorageUtil";
import { RootState } from "../Store";
import { Transactions, UserState } from "../types";

// Define the initial state using that type
const initialState: UserState = {
  loading: false,
  phoneNumber: "",
  fullName: "",
  firstName: "",
  lastName: "",
  pictureUrl: "https://ui-avatars.com/api/?name=Test+User",
  azaAccountNumber: 0,
  azaBalance: 100000,
  emailAddress: "",
  accountVerified: false,
  bvnVerified: false,
  accountStatus: "",
  recentTransactions: {
    loading: false,
    data: [
      {
        dateOfTransactions: "15 June 2022",
        transactions: [
          {
            id: 1,
            imageUrl: "https://ui-avatars.com/api/?name=Test+User",
            name: "Test User 1",
            transactionType: "incoming",
            transactionTitle: "Incoming Transfer",
            transactionMessage: "Chop life my gee ",
            amount: "28,000.00",
            date: "4 July 2022 04:26",
          },
          {
            id: 2,
            imageUrl: "https://ui-avatars.com/api/?name=Test+User",
            name: "Test User 2",
            transactionType: "outgoing",
            transactionTitle: "Transfer to Bank",
            transactionMessage: "",
            amount: "328,000.00",
            date: "4 July 2022 04:26",
          },
          {
            id: 3,
            imageUrl: "https://ui-avatars.com/api/?name=Test+User",
            name: "Test User 3",
            transactionType: "incoming",
            transactionTitle: "Incoming Transfer",
            transactionMessage: "",
            amount: "28,000.00",
            date: "4 July 2022 04:26",
          },
        ],
      },
      {
        dateOfTransactions: "9 June 2022",
        transactions: [
          {
            id: 9,
            imageUrl: "https://ui-avatars.com/api/?name=Test+User",
            name: "Test User 1",
            transactionType: "outgoing",
            transactionTitle: "Outgoing Transfer",
            transactionMessage: "Chop life my gee ",
            amount: "28,000.00",
            date: "4 July 2022 04:26",
          },

          {
            id: 10,
            imageUrl: "https://ui-avatars.com/api/?name=Test+User",
            name: "Test User 2",
            transactionType: "outgoing",
            transactionTitle: "Outgoing Transfer",
            transactionMessage: "Chop life my gee ",
            amount: "28,000.00",
            date: "4 July 2022 04:26",
          },
        ],
      },
    ],
  },
  accountCurency: "",
  pushToken: "",
  transfers: {
    loading: false,
    incommingTransferLimit: 0,
    depositAmountLimit: 0,
    totalMonthlySenders: 0,
    totalMonthlyReceivers: 0,
    totalMonthlyIncomingTransfers: 0,
    totalMonthlyIncomingTransferAmount: 0,
    totalMonthlyOutgoingTransfers: 0,
    totalMonthlyOutgoingTransferAmount: 0,
  },
  vault: { loading: false, recentTransaction: [] },
  payments: { loading: false, recentPayments: [] },
  azaContacts: {
    loading: false,
    data: [
      {
        azaAccountNumber: "12345678",
        fullName: "Test User2",
        firstName: "Test",
        lastName: "User2",
        phone: "234567890",
        pictureUrl: "https://ui-avatars.com/api/?name=Test+User",
        currency: "NGN",
        email: "testuser2@aza.com",
      },
      {
        azaAccountNumber: "12345679",
        fullName: "Test User3",
        firstName: "Test",
        lastName: "User4",
        phone: "234567890",
        pictureUrl: "https://ui-avatars.com/api/?name=Test+User",
        currency: "NGN",
        email: "testuser4@aza.com",
      },
      {
        azaAccountNumber: "12345610",
        fullName: "Test User4",
        firstName: "Test",
        lastName: "User4",
        phone: "234567890",
        pictureUrl: "https://ui-avatars.com/api/?name=Test+User",
        currency: "NGN",
        email: "testuser4@aza.com",
      },
    ],
  },
  bankAccounts: {
    loading: false,
    data: [
      {
        accountName: "Test Account",
        accountNumber: "000111221",
        bankName: "GT Bank",
      },
      {
        accountName: "Test Account 2",
        accountNumber: "000111222",
        bankName: "VFD Bank",
      },
    ],
  },
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state = action.payload;
    },
    setUserPhoneAndFullName: (
      state,
      action: PayloadAction<{ phoneNumber: string; fullName: string }>
    ) => {
      state.phoneNumber = action.payload.phoneNumber;
      state.fullName = action.payload.fullName;
    },
    setPushToken: (state, action: PayloadAction<string>) => {
      state.pushToken = action.payload;
    },
    setVault: (state, action: PayloadAction<any>) => {
      state.vault = action.payload.vault;
    },
    setBvnVerified: (state, action: PayloadAction<boolean>) => {
      state.bvnVerified = action.payload;
    },
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.emailAddress = action.payload;
    },
    setUserPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setProfilePicture: (state, action: PayloadAction<string>) => {
      state.pictureUrl = action.payload;
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
      })
      .addCase(getUserInfo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUserInfo.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        // state.firstName = action.payload.
      })
      .addCase(uploadProfilePicThunk.fulfilled, (state, action) => {
        state.pictureUrl = action.payload as any;
      });
  },
});

export const getUserInfo = createAsyncThunk(
  "user/getInfo",
  async ({}, { rejectWithValue, fulfillWithValue }) => {
    try {
      const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
      const info = await api.get("/api/v1/user/info", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      return fulfillWithValue(info.data);
    } catch (e: any) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const getUserTransactions = createAsyncThunk(
  "user/getTransactions",
  async (
    { accountNumber, token }: { accountNumber: number; token: string },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const result = await api.get(
        `/api/v1/account/${accountNumber}/transactions`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return fulfillWithValue(result.data);
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const addBankAccount = createAsyncThunk(
  "user/addBankAccount",
  async (
    { accountNumber, token }: { accountNumber: number; token: string },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      //   const result = await api.post(
      //     `/api/v1/account/${accountNumber}/trnasactions`,
      //     { headers: { Authorization: `Bearer ${token}` } }
      //   );
      return fulfillWithValue(null);
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const uploadProfilePicThunk = createAsyncThunk(
  "user/upload",
  async (formData: FormData, { rejectWithValue, fulfillWithValue }) => {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);

    return api
      .patch("/api/v1/user/photo-upload", formData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then(
        (response) => {
          return fulfillWithValue(response.data.data);
        },
        (error: AxiosError) => {
          return rejectWithValue(error.message);
        }
      );
  }
);

export const {
  setUser,
  setUserPhoneAndFullName,
  setPushToken,
  setBvnVerified,
  setUserEmail,
  setUserPhoneNumber,
  setVault,
  setProfilePicture,
} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
