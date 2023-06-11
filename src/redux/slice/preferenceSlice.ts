import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISettings } from "../../hooks/useAsyncStorage";
import { RootState } from "../Store";

// Define the initial state using that type
const initialState: ISettings = {
  accountBalanceVisibilitySwitch: false,
  appearance: "light",
  appLanguage: "English",
  communicationPermitSwitch: false,
  confirmTransactionsWithFaceIDSwitch: false,
  contactVisibilitySwitch: false,
  loginWithFaceIDSwitch: false,
  nameVisibilitySwitch: false,
  splitAndMoneyRequestsSwitch: false,
};

export const preferenceSlice = createSlice({
  name: "preference",
  initialState,
  reducers: {
    setAppPreference: (state, action: PayloadAction<ISettings>) => {
      state.loginWithFaceIDSwitch = action.payload.loginWithFaceIDSwitch;
      state.accountBalanceVisibilitySwitch =
        action.payload.accountBalanceVisibilitySwitch;
      state.appearance = action.payload.appearance;
      state.appLanguage = action.payload.appLanguage;
      state.communicationPermitSwitch =
        action.payload.communicationPermitSwitch;
      state.confirmTransactionsWithFaceIDSwitch =
        action.payload.confirmTransactionsWithFaceIDSwitch;
      state.contactVisibilitySwitch = action.payload.contactVisibilitySwitch;
      state.nameVisibilitySwitch = action.payload.nameVisibilitySwitch;
      state.splitAndMoneyRequestsSwitch =
        action.payload.splitAndMoneyRequestsSwitch;
    },
  },
});

export const { setAppPreference } = preferenceSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAppPreference = (state: RootState) => state.preference;

export default preferenceSlice.reducer;
