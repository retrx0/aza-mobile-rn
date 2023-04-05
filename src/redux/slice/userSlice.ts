import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Mtn } from "../../../assets/images";
import { thunkCourier } from "../../common/util/ReduxUtil";
import { RootState } from "../Store";
import {
  I9PSBWallet,
  IUserInfoResponse,
  IUserState,
} from "../../types/types.redux";

// Define the initial state using that type
const initialState: IUserState = {
  loading: false,
  loaded: false,
  phoneNumber: "",
  firstName: "",
  lastName: "",
  fullName: "",
  pictureUrl: "https://ui-avatars.com/api/?name=Aza",
  azaAccountNumber: "",
  aza9PSBAccountNumber: "",
  azaBalance: 0,
  emailAddress: "",
  accountVerified: false,
  bvnVerified: false,
  bvnNumber: "",
  accountStatus: "",
  dateOfBirth: "",
  lastLogin: "",
  recentTransactions: {
    loading: false,
    loaded: false,
    data: [
      // {
      //   dateOfTransactions: "15 June 2022",
      //   transactions: [
      //     {
      //       id: 1,
      //       imageUrl: "https://ui-avatars.com/api/?name=Test+User",
      //       name: "Test User 1",
      //       transactionType: "incoming",
      //       transactionTitle: "Incoming Transfer",
      //       transactionMessage: "Chop life my gee ",
      //       amount: "28,000.00",
      //       date: "4 July 2022 04:26",
      //     },
      //     {
      //       id: 2,
      //       imageUrl: "https://ui-avatars.com/api/?name=Test+User",
      //       name: "Test User 2",
      //       transactionType: "outgoing",
      //       transactionTitle: "Transfer to Bank",
      //       transactionMessage: "",
      //       amount: "328,000.00",
      //       date: "4 July 2022 04:26",
      //     },
      //   ],
      // },
    ],
  },
  accountCurency: "NGN",
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
  payments: {
    loading: false,
    loaded: false,
    data: [
      {
        amount: "2000",
        status: "Paid",
        vendorName: "Test",
        vendorLogo: Mtn,
        date: "4 July 2022 04:26",
        category: "Airtime & Data",
      },
    ],
  },
  azaContacts: {
    loading: false,
    loaded: false,
    data: [
      {
        azaAccountNumber: "1100016732",
        fullName: "CEO",
        firstName: "CEO",
        lastName: "Aza",
        phone: "2344444444444",
        pictureUrl: "https://ui-avatars.com/api/?name=C+E",
        currency: "NGN",
        email: "testuser@aza.com",
      },
      {
        azaAccountNumber: "1100016725",
        fullName: "CTO",
        firstName: "CTO",
        lastName: "Aza",
        phone: "2344444444444",
        pictureUrl: "https://ui-avatars.com/api/?name=C+T",
        currency: "NGN",
        email: "testuser@aza.com",
      },
      {
        azaAccountNumber: "1100016746",
        fullName: "VP",
        firstName: "VP",
        lastName: "Aza",
        phone: "2344444444444",
        pictureUrl: "https://ui-avatars.com/api/?name=V+P",
        currency: "NGN",
        email: "testuser@aza.com",
      },
    ],
  },
  bankAccounts: {
    loading: false,
    loaded: false,
    data: [],
  },
  paymentRequests: {
    loading: false,
    loaded: false,
    data: [
      {
        type: "outgoing",
        amount: "20300",
        status: "Pending",
        vendorName: "DSTV",
        vendorLogo: "https://ui-avatars.com/api/?name=Vendor+Logo",
        date: "4 July 2022 04:26",
        category: "Cable Tv",
        requestor: {
          azaAccountNumber: "123324354",
          fullName: "Test User",
          pictureUrl: "https://ui-avatars.com/api/?name=Test+User",
        },
        requestees: [
          {
            azaAccountNumber: "2342421",
            fullName: "Testing user",
            pictureUrl: "https://ui-avatars.com/api/?name=Test+User",
          },
          {
            azaAccountNumber: "234421",
            fullName: "Testing user 2",
            pictureUrl: "https://ui-avatars.com/api/?name=Test+User",
          },
        ],
      },
      {
        type: "outgoing",
        amount: "20300",
        status: "Paid",
        vendorName: "DSTV",
        category: "Cable Tv",
        vendorLogo: "https://ui-avatars.com/api/?name=Vendor+Logo",
        date: "4 July 2022 04:26",
        requestor: {
          azaAccountNumber: "123324354",
          fullName: "Test User",
          pictureUrl: "https://ui-avatars.com/api/?name=Test+User",
        },
        requestees: [
          {
            azaAccountNumber: "2342421",
            fullName: "Testing user",
            pictureUrl: "https://ui-avatars.com/api/?name=Test+User",
          },
          {
            azaAccountNumber: "234421",
            fullName: "Testing user 2",
            pictureUrl: "https://ui-avatars.com/api/?name=Test+User",
          },
        ],
      },
      {
        type: "incoming",
        amount: "20300",
        status: "Paid",
        vendorName: "DSTV",
        category: "Cable Tv",
        vendorLogo: "https://ui-avatars.com/api/?name=Vendor+Logo",
        date: "4 July 2022 04:26",
        requestor: {
          azaAccountNumber: "123324354",
          fullName: "Test User",
          pictureUrl: "https://ui-avatars.com/api/?name=Test+User",
        },
        requestees: [
          {
            azaAccountNumber: "2342421",
            fullName: "Testing user",
            pictureUrl: "https://ui-avatars.com/api/?name=Test+User",
          },
          {
            azaAccountNumber: "232421",
            fullName: "Testing user 4",
            pictureUrl: "https://ui-avatars.com/api/?name=Test+User",
          },
        ],
      },
      {
        type: "incoming",
        amount: "20300",
        status: "Pending",
        vendorName: "DSTV",
        category: "Cable Tv",
        vendorLogo: "https://ui-avatars.com/api/?name=Vendor+Logo",
        date: "4 July 2022 04:26",
        requestor: {
          azaAccountNumber: "123324354",
          fullName: "Test User",
          pictureUrl: "https://ui-avatars.com/api/?name=Test+User",
        },
        requestees: [
          {
            azaAccountNumber: "2342421",
            fullName: "Testing user",
            pictureUrl: "https://ui-avatars.com/api/?name=Test+User",
          },
          {
            azaAccountNumber: "232421",
            fullName: "Testing user 4",
            pictureUrl: "https://ui-avatars.com/api/?name=Test+User",
          },
        ],
      },
    ],
  },
  accountTier: "",
  bvn: "",
  isEmailConfirmed: false,
  isPhoneNumberConfirmed: false,
  isTransactionPinSet: false,
  userName: "",
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state = action.payload;
    },
    setUserFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
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

      .addCase(getUserTransactions.rejected, (state, action) => {
        state.recentTransactions.loading = false;
      })
      .addCase(getUserTransactions.fulfilled, (state, action) => {
        console.log(action.payload);
        state.recentTransactions.loading = false;
        state.recentTransactions.data = action.payload;
      })
      .addCase(getUserInfo.pending, (state, action) => {
        state.loading = true;
        state.loaded = false;
      })
      .addCase(getUserInfo.rejected, (state) => {
        state.loading = false;
        state.loaded = false;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.loaded = true;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.fullName =
          action.payload.lastName + ", " + action.payload.firstName;
        state.phoneNumber = action.payload.phoneNumber;
        state.emailAddress = action.payload.email;
        state.gender = action.payload.gender;
        state.bvnVerified = action.payload.isBVNComfirmed;
        state.accountVerified = action.payload.isBVNComfirmed;
        state.isTransactionPinSet = action.payload.isTransactionPinSet;
        state.dateOfBirth = action.payload.dateOfBirth;
        state.pictureUrl = action.payload.pictureUrl;
        state.lastLogin = action.payload.lastLogin;
        state.accountTier = action.payload.accountTier;
        state.dateOfBirth = action.payload.dateOfBirth;
        state.aza9PSBAccountNumber = String(action.payload.walletNumber);
      })
      .addCase(uploadProfilePicThunk.pending, (state, action) => {})
      .addCase(uploadProfilePicThunk.rejected, (state, action) => {})
      .addCase(uploadProfilePicThunk.fulfilled, (state, action) => {
        state.pictureUrl = action.payload as any;
      })
      .addCase(addUserBvnThunk.pending, (state, action) => {
        state.bvnVerified = false;
      })
      .addCase(addUserBvnThunk.rejected, (state, action) => {
        state.bvnVerified = false;
      })
      .addCase(addUserBvnThunk.fulfilled, (state, action) => {
        console.log("BVN" + action.payload);
        state.bvnVerified = action.payload as boolean;
      })
      .addCase(getUserAccountDetails.pending, (state, action) => {})
      .addCase(getUserAccountDetails.rejected, (state, action) => {})
      .addCase(getUserAccountDetails.fulfilled, (state, action) => {
        state.azaAccountNumber = String(action.payload.walletNumber);
        state.aza9PSBAccountNumber = String(action.payload.walletNumber);
        state.azaBalance = action.payload.availableBalance;
        state.accountStatus = action.payload.status;
      })
      .addCase(getUserSavedBankAccs.pending, (state, action) => {
        state.bankAccounts.loading = true;
        state.bankAccounts.loaded = false;
      })
      .addCase(getUserSavedBankAccs.rejected, (state, action) => {
        state.bankAccounts.loading = false;
        state.bankAccounts.loaded = false;
      })
      .addCase(getUserSavedBankAccs.fulfilled, (state, action) => {
        console.log(action.payload);
        state.bankAccounts.loading = false;
        state.bankAccounts.loaded = true;
        state.bankAccounts.data = action.payload;
      })
      .addCase(removeUserSavedBankAcc.pending, (state, action) => {})
      .addCase(removeUserSavedBankAcc.rejected, (state, action) => {})
      .addCase(removeUserSavedBankAcc.fulfilled, (state, action) => {
        state.bankAccounts.data = state.bankAccounts.data.filter(
          (account) => account.id !== action.meta.arg
        );
      })
      .addCase(saveUserBankAcc.pending, (state, action) => {})
      .addCase(saveUserBankAcc.rejected, (state, action) => {})
      .addCase(saveUserBankAcc.fulfilled, (state, action) => {});
  },
});

// export const getSupportedBanks = createAsyncThunk("banks", async () => {
//   return await thunkCourier("get", "/api/v1/payment/banks");
// });

export const getUserInfo = createAsyncThunk<IUserInfoResponse>(
  "user/getInfo",
  async () => {
    return await thunkCourier("get", "/api/v1/user/info");
  }
);

export const getUserAccountDetails = createAsyncThunk<I9PSBWallet>(
  "user/getAccount",
  async () => {
    return await thunkCourier("get", "/api/v1/account");
  }
);

export const getUserAccountDetailsWithNumber = createAsyncThunk(
  "user/getAccount",
  async ({ accountNumber }: { accountNumber: string }) => {
    return await thunkCourier("get", `/api/v1/account/${accountNumber}`);
  }
);

export const getUserTransactions = createAsyncThunk(
  "user/getTransactions",
  async ({ accountNumber }: { accountNumber: string }) => {
    return await thunkCourier(
      "get",
      `/api/v1/account/${accountNumber}/transactions`
    );
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
  async (formData: FormData) => {
    return await thunkCourier<FormData>(
      "patch",
      "/api/v1/user/photo-upload",
      formData
    );
  }
);

export const addUserBvnThunk = createAsyncThunk(
  "user/addUserBvn",
  async ({ bvn, dateOfBirth }: { bvn: string; dateOfBirth: string }) => {
    console.log(dateOfBirth);
    return await thunkCourier<{ bvn: string; dateOfBirth: string }>(
      "post",
      "/api/v1/user/add/bvn",
      {
        bvn: bvn,
        dateOfBirth: dateOfBirth,
      }
    );
  }
);

export const getUserSavedBankAccs = createAsyncThunk(
  "user/getUserSavedBankAccounts",
  async () => {
    return await thunkCourier("get", "/api/v1/bank/accounts");
  }
);

export const removeUserSavedBankAcc = createAsyncThunk(
  "user/removeUserSavedBankAccounts",
  async (bankAccountId: string) => {
    return await thunkCourier(
      "delete",
      `/api/v1/bank/accounts/${bankAccountId}`
    );
  }
);

export const saveUserBankAcc = createAsyncThunk(
  "user/saveUserBankAccount",
  async ({
    accountName,
    accountNumber,
    bankCode,
    isBeneficiary,
  }: {
    accountName: string;
    accountNumber: string;
    bankCode: string;
    isBeneficiary: boolean;
  }) => {
    return await thunkCourier("put", `/api/v1/bank/accounts`, {
      accountName,
      accountNumber,
      bankCode,
      isBeneficiary,
    });
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
  setUserFullName,
} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
