import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

// Define a type for the slice state
export interface UserState {
  phoneNumber: string;
  fullName: string;
  firstName: string;
  lastName: string;
  azaAccountNumber: number;
  azaBalance: number;
  emailAddress: string;
}

// Define the initial state using that type
const initialState: UserState = {
  phoneNumber: "",
  fullName: "",
  firstName: "",
  lastName: "",
  azaAccountNumber: 0,
  azaBalance: 0,
  emailAddress: "",
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
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
    },
  },
});

export const {
  setPhone,
  setFirstName,
  setLastName,
  setEmail,
  setFullName,
  setUser,
} = userSlice.actions;

export const selectUser = (state: RootState) => state.user;
// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
