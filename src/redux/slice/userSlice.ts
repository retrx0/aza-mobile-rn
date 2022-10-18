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
  reducers: {},
});

export const {} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
