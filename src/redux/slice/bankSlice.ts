import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { thunkCourier } from "../../common/util/ReduxUtil";
import { RootState } from "../Store";
import { IBankState } from "../../types/types.redux";

const initialState: IBankState = {
  banks: {
    loading: true,
    loaded: false,
    data: [],
  },
};

export const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSupportedBanks.pending, (state, action) => {
        state.banks.loading = true;
        state.banks.loaded = false;
      })
      .addCase(getSupportedBanks.rejected, (state, action) => {
        state.banks.data = [];
        state.banks.loading = false;
        state.banks.loaded = false;
      })
      .addCase(getSupportedBanks.fulfilled, (state, action) => {
        state.banks.data = action.payload;
        state.banks.loading = false;
        state.banks.loaded = true;
      });
  },
});

export const getSupportedBanks = createAsyncThunk("banks", async () => {
  return await thunkCourier("get", "/api/v1/payment/banks");
});

export const {} = bankSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBank = (state: RootState) => state.bank;

export default bankSlice.reducer;
