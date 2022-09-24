import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { Gender, User } from "../types";

interface NewUser extends User {
  isVerified?: boolean;
  otpSent?: false;
  otpTimeStamp?: undefined;
  otpSentCount?: number;
  isUsePasscodeAsPin?: boolean;
  createdPasscode?: string;
}

// Define the initial state using that type
const initialState: NewUser = {
  phone: "",
  firstname: "",
  lastname: "",
  email: "",
  gender: "Unknown",
  isVerified: false,
  isUsePasscodeAsPin: false,
};

export const newUserSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstname = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastname = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    setIsVerified: (state, action: PayloadAction<boolean>) => {
      state.isVerified = action.payload;
    },
    setNewUser: (state, action: PayloadAction<NewUser>) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.email = action.payload.email;
      state.isUsePasscodeAsPin = action.payload.isUsePasscodeAsPin;
      state.createdPasscode = action.payload.createdPasscode;
      state.gender = action.payload.gender;
    },
  },
});

export const {
  setPhone,
  setFirstName,
  setLastName,
  setEmail,
  setIsVerified,
  setGender,
  setNewUser,
} = newUserSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectNewUser = (state: RootState) => state.newUser;

export default newUserSlice.reducer;
