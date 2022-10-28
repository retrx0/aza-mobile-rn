import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { Gender, User } from "../types";
import api from "../../api";
import {API_BASE_URL} from '@env'
interface NewUser extends User {
  isVerified?: boolean;
  otpSent?: boolean;
  otpTimeStamp?: undefined;
  otpSentCount?: number;
  isUsePasscodeAsPin?: boolean;
  createdPasscode?: string;
  loading?: boolean;
  otp?:number;
  token?:string|void;
}

// Define the initial state using that type
const initialState: NewUser = {
  phone: "",
  firstname: "",
  lastname: "",
  email: "",
  gender:'',
  isVerified: false,
  isUsePasscodeAsPin: false,
  loading:false,
  token:''
};

//Create async function fro requesting otp
export const requestOtp = createAsyncThunk(
  "user/requestOtp",
  async (props: NewUser) => {
    const bodyData = {
      phoneNumber:0,
      email: props.email,
    };

    api
      .post("/api/v1/auth/request-otp", {
        phoneNumber:'',
        email:'mubarakibrahim2015@gmail.com',
      })
      .then(
        (response) =>{
          console.log(response.headers,"+++++")
        },
        (error) => {
          console.log(error);
        }
      );
  }
);

//Async function to verify otp
export const verifyOtp = createAsyncThunk(
  "user/verifyOtp",
  (props: NewUser) => {
    const bodyData = {
      // phoneNumber: props.phone,
      email:'mubarakibrahim2015@gmail.com',
      otp:props.otp
    };

return api
      .post("/api/v1/auth/verify-otp", {
        phoneNumber: props.phone,
        email: props.email,
        otp:props.otp
      })
      .then(
        (response) =>response.headers["access-token"],
        (error) => {
          console.log(error);
        }
      );
  }
);



export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (props: NewUser) => {
    const bodyData={
          firstName:props.firstname,
          lastName: props.lastname,
          gender: 'Male',
          email: "mubarakibrahim2015@gmail.com",
          countryCode:'Ng',
          phoneNumber:props.phone,
          dateOfBirth: "2022-10-05T06:49:36.196Z",
          emailConfirmed: true,
          phoneNumberConfirmed: true
    }

    return api({
      method:'put',
      data:bodyData,
      headers:{
        "Content-Type":'application/json',
        'Authorization':`Bearer ${props.token}`
      },
      url:'/api/v1/user/register'
    })
    .then((response) =>response.headers["access-token"],
    (error) => {
      console.log(error);
    })
    
  }
);

export const setPassword = createAsyncThunk(
  "user/setPassword",
  async (props: NewUser) => {
    const bodyData={
      newPassword:props.password,
          
    }

    return api({
      method:'patch',
      data:bodyData,
      headers:{
        "Content-Type":'application/json',
        'Authorization':`Bearer ${props.token}`
      },
      url:'/api/v1/user/set-password'
    })
    .then(response=>{
      console.log(response)
      
     })
     .catch(err=>{
       console.log(err)
     })
  }
);

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
    },
  },
  extraReducers: (builder) => {
    builder.addCase(requestOtp.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(requestOtp.rejected, (state, action) => {
        state.otpSent = false;
        state.loading = false;
      }),
      builder.addCase(requestOtp.fulfilled, (state, action) => {
        state.otpSent = true;
        state.loading = false;
      }),
      builder.addCase(verifyOtp.pending,(state, action)=>{
        state.loading=true
      }),
      builder.addCase(verifyOtp.rejected,(state, action)=>{
        state.loading=false
      }),
      builder.addCase(verifyOtp.fulfilled,(state, action)=>{
        state.loading=false
        state.isVerified=true
        state.token=action.payload
        console.log(action.payload,"++++++++++ACCC")
      })
      builder.addCase(registerUser.pending,(state, action)=>{
        state.loading=true
      }),
      builder.addCase(registerUser.rejected,(state, action)=>{
        state.loading=false
      }),
      builder.addCase(registerUser.fulfilled,(state, action)=>{
        state.loading=false
        state.token=action.payload
        
      })
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


