import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { Gender, User } from "../types";
import {BASE_URL} from '@env'
interface NewUser extends User {
  isVerified?: boolean;
  otpSent?: boolean;
  otpTimeStamp?: undefined;
  otpSentCount?: number;
  isUsePasscodeAsPin?: boolean;
  createdPasscode?: string;
  loading?:boolean;
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

//Create async function fro requesting otp
export const requestOtp=createAsyncThunk('user/requestOtp',async (props:NewUser)=>{
 const bodyData= {
    phoneNumber:props.phone,
    email:props.email
  }
  
 fetch(`${BASE_URL}/api/auth/request-otp`, {
    method:'POST',
    headers:{
      "Content-Type":'application/json'
    },
    body:JSON.stringify(bodyData)
    
  })
  .then(res=>res.json())
  .catch(err=>console.log(err))
})



export const newUserSlice = createSlice({
  name: "user",
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
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(requestOtp.pending, (state, action) => {
      state.loading=true
    }),
    builder.addCase(requestOtp.rejected, (state, action) => {
      state.otpSent=false
      state.loading=false
    }),
    builder.addCase(requestOtp.fulfilled, (state, action) => {
      state.otpSent=true
      state.loading=false
    })
    
  }
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


