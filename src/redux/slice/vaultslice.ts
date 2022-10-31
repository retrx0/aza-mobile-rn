import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import api from "../../api";

// Define a type for the slice state
export interface VaultState {
  duration: number;
  durationType: number;
  vaultName: string;
  initatialLockAmount: number;
  currency: string;
  accountNumber: number;
  vaultsent?: boolean;
  vaultId: string;
  loading?: boolean;
  receingAccount: string;
}

// Define the initial state using that type
const initialState: VaultState = {
  duration: 0,
  durationType: 0,
  vaultName: "",
  initatialLockAmount: 0,
  currency: "",
  accountNumber: 0,
  vaultId: "",
  receingAccount: "",
};

//Create async function for vault
export const newVault = createAsyncThunk("vault", async (props: VaultState) => {
  api
    .post("/api/v1/vault", {
      duration: props.duration,
      durationType: props.durationType,
      vaultName: props.vaultName,
      initatialLockAmount: props.initatialLockAmount,
      currency: props.currency,
      accountNumber: props.accountNumber,
    })
    .then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
});

//Create async function to get vaultId
export const vaultId = createAsyncThunk(
  "vault/vaultId",
  async (props: VaultState) => {
    api
      .post("/api/v1/vault/{vaultId}", {
        vaultId: props.vaultId,
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

//Create async function to delete vault

export const deleteVault = createAsyncThunk(
  "vault/vaultId",
  async (props: VaultState) => {
    api
      .post("/api/v1/vault", {
        vaultId: props.vaultId,
        receingAccount: props.receingAccount,
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

export const vaultSlice = createSlice({
  name: "vault",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    setDurationType: (state, action: PayloadAction<number>) => {
      state.durationType = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setVaultName: (state, action: PayloadAction<string>) => {
      state.vaultName = action.payload;
    },
    setInitatialLockAmount: (state, action: PayloadAction<number>) => {
      state.initatialLockAmount = action.payload;
    },
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
    setAccountNumber: (state, action: PayloadAction<number>) => {
      state.accountNumber = action.payload;
    },

    setVaultId: (state, action: PayloadAction<string>) => {
      state.vaultId = action.payload;
    },
    setReceingAccount: (state, action: PayloadAction<string>) => {
      state.receingAccount = action.payload;
    },
  },
});

export const {
  setDuration,
  setDurationType,
  setVaultName,
  setInitatialLockAmount,
  setCurrency,
  setAccountNumber,
  setVaultId,
  setReceingAccount,
} = vaultSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectVault = (state: RootState) => state.vault;

export default vaultSlice.reducer;
