import { STORAGE_KEY_JWT_TOKEN } from "@env";
import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { string } from "yup";
import api from "../../api";
import { thunkCourier } from "../../common/util/ReduxUtil";
import { getItemSecure } from "../../common/util/StorageUtil";
import { RootState } from "../Store";
import { ICharity, IGiftCard, IPaymentState } from "../types";

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
    loaded: true,
    data: [
      {
        id: 1,
        charityName: "Aza Innovations",
        primaryAccountNo: "1021100477",
        secondaryAccountNo: "",
        pictureUrl:
          "https://azablobstorage01.blob.core.windows.net/aza-blob-01/charities/aza-foundation.jpg",
        description:
          "Aza Foundation is the charity sector of Aza which vows to eliminate poverty from Nigeria through various charitable events and acts.",
        city: "Abuja",
        primaryAccBankName: "VFD MFB",
        secondaryAccBankName: "",
      },
      {
        id: 2,
        charityName: "Islamic Education Trust",
        primaryAccountNo: "-1",
        secondaryAccountNo: "",
        pictureUrl:
          "https://azablobstorage01.blob.core.windows.net/aza-blob-01/charities/IET.png",
        description:
          "Since its inception, the 3 thematic areas of focus of the Islamic Education Trust have been Dawah (public enlightenment), Education and Human Welfare.",
        city: "Minna",
        primaryAccBankName: "",
        secondaryAccBankName: "",
      },
      {
        id: 3,
        charityName: "Living Fountain Orphanage",
        primaryAccountNo: "1012389536",
        secondaryAccountNo: "158992346",
        pictureUrl:
          "https://azablobstorage01.blob.core.windows.net/aza-blob-01/charities/FOUNTAIN.png",
        description:
          "An NGO established to provide welfare packages and hope for a better future for the abandoned and under privileged children in Nigeria.",
        city: "Lagos",
        primaryAccBankName: "Zenith Bank",
        secondaryAccBankName: "GT Bank",
      },
      {
        id: 4,
        charityName: "Little Saints Orphanage",
        primaryAccountNo: "0007160830",
        secondaryAccountNo: "1011528464",
        pictureUrl:
          "https://azablobstorage01.blob.core.windows.net/aza-blob-01/charities/charity.jpg",
        description:
          "A divine haven for Orphans, Abused, and Abandoned Children. The first indigenous orphanage approved by Lagos State.",
        city: "Lagos",
        primaryAccBankName: "GT Bank",
        secondaryAccBankName: "Zenith Bank",
      },
    ],
  },
  airtimeOperators: {
    loading: false,
    loaded: false,
    data: [],
  },
  giftCards: {
    loading: false,
    data: [],
    loaded: false,
  },
  electricityBillers: {
    loading: false,
    data: [],
    loaded: false,
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
    builder
      .addCase(getCharities.pending, (state, action) => {
        state.charities.loading = true;
        state.charities.loaded = false;
      })
      .addCase(getCharities.rejected, (state, action) => {
        state.charities.data = [];
        state.charities.loading = false;
        state.charities.loaded = false;
      })
      .addCase(getCharities.fulfilled, (state, action) => {
        console.log(action.payload);
        state.charities.data = action.payload;
        state.charities.loading = false;
        state.charities.loaded = true;
      })
      .addCase(getGiftCards.pending, (state, action) => {
        state.giftCards.loading = true;
        state.giftCards.loaded = false;
      })
      .addCase(getGiftCards.rejected, (state, action) => {
        state.giftCards.loading = false;
        state.giftCards.loaded = false;
      })
      .addCase(getGiftCards.fulfilled, (state, action) => {
        state.giftCards.loading = false;
        state.giftCards.loaded = true;
        state.giftCards.data = action.payload;
      })
      .addCase(getElectricityBillers.pending, (state, action) => {
        state.electricityBillers.loading = true;
        state.electricityBillers.loaded = false;
      })
      .addCase(getElectricityBillers.rejected, (state, action) => {
        state.electricityBillers.loading = false;
        state.electricityBillers.loaded = false;
      })
      .addCase(getElectricityBillers.fulfilled, (state, action) => {
        state.electricityBillers.loading = false;
        state.electricityBillers.loaded = true;
        state.electricityBillers.data = action.payload;
      })
      .addCase(getMobileAirtimeOperators.pending, (state, action) => {
        state.airtimeOperators.loading = true;
        state.airtimeOperators.loaded = false;
      })
      .addCase(getMobileAirtimeOperators.rejected, (state, action) => {
        state.airtimeOperators.loading = false;
        state.airtimeOperators.loaded = false;
      })
      .addCase(getMobileAirtimeOperators.fulfilled, (state, action) => {
        state.airtimeOperators.loading = false;
        state.airtimeOperators.loaded = true;
        state.airtimeOperators.data = action.payload;
      });
  },
});

export const getCharities = createAsyncThunk("charities", async () => {
  return await thunkCourier("get", "/api/v1/charity");
});

export const getGiftCards = createAsyncThunk("giftcards", async () => {
  return await thunkCourier("get", "/api/v1/gift-cards/Nigeria");
});

export const getElectricityBillers = createAsyncThunk(
  "electricity",
  async () => {
    return await thunkCourier("get", "/api/v1/utilities/billers/electricity");
  }
);

export const getMobileAirtimeOperators = createAsyncThunk(
  "mobileAirtimeOperators",
  async () => {
    return await thunkCourier("get", "/api/top-up/operators");
  }
);

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
