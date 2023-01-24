import { STORAGE_KEY_JWT_TOKEN } from "@env";
import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { string } from "yup";
import api from "../../api";
import { getItemSecure } from "../../common/util/StorageUtil";
import { RootState } from "../Store";
import { ICharity } from "../types";

export interface IPaymentState {
  detailHeader: string;
  detailValue: string;
  amount: string;
  paymentMethod: "Aza Account" | "Bank Account";
  to: string;
  logo: string;
  paymentType: string;
  charities: { loading: boolean; data: ICharity[] };
  internetProviders: { loading: boolean; data: [] };
}

const initialState: IPaymentState = {
  detailHeader: "",
  amount: "",
  paymentMethod: "Aza Account",
  to: "",
  logo: "",
  paymentType: "",
  detailValue: "",
  charities: {
    loading: false,
    data: [],
  },
  internetProviders: {
    loading: false,
    data: [],
  },
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
      action: PayloadAction<IPaymentState["paymentMethod"]>
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
  extraReducers: (builder) => {
    builder.addCase(getCharities.pending, (state, action) => {
      state.charities.loading = true;
    }),
      builder.addCase(getCharities.rejected, (state, action) => {
        state.charities.data = [];
        state.charities.loading = false;
      }),
      builder.addCase(getCharities.fulfilled, (state, action) => {
        state.charities.data = action.payload;
        state.charities.loading = false;
      });
  },
});

export const getCharities = createAsyncThunk("charities", async () => {
  const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
  return api({
    method: "get",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
    url: "/api/v1/charity",
  }).then(
    (response) => {
      return response.data;
    },
    (error) => {
      console.debug(error);
    }
  );
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
