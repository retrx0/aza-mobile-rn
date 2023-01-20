import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store";

export interface PaymentState {
  detailHeader: string;
  detailValue: string;
  amount: string;
  paymentMethod: "Aza Account" | "Bank Account";
  to: string;
  logo: string;
  paymentType: string;
}

const initialState: PaymentState = {
  detailHeader: "",
  amount: "",
  paymentMethod: "Aza Account",
  to: "",
  logo: "",
  paymentType: "",
  detailValue: "",
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setDetailHeader: (state, action: PayloadAction<string>) => {
      state.detailHeader = action.payload;
    },
    setAmount: (state, action: PayloadAction<string>) => {
      state.amount = action.payload;
    },
    setTo: (state, action: PayloadAction<string>) => {
      state.to = action.payload;
    },
    setPaymentMethod: (
      state,
      action: PayloadAction<PaymentState["paymentMethod"]>
    ) => {
      state.paymentMethod = action.payload;
    },
    setLogo: (state, action: PayloadAction<string>) => {
      state.logo = action.payload;
    },
    setPaymentTYpe: (state, action: PayloadAction<string>) => {
      state.paymentType = action.payload;
    },
    setDetailValue: (state, action: PayloadAction<string>) => {
      state.detailValue = action.payload;
    },
  },
});

export const {
  setAmount,
  setLogo,
  setPaymentMethod,
  setTo,
  setPaymentTYpe,
  setDetailHeader,
  setDetailValue,
} = paymentSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPayment = (state: RootState) => state.payment;

export default paymentSlice.reducer;
