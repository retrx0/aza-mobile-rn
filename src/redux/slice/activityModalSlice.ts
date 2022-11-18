import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store";

// Define a type for the slice state
interface ModalState {
  isModalOpen: boolean;
}

// Define the initial state using that type
const initialState: ModalState = {
  isModalOpen: false,
};

export const activityModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleActivityModal: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { toggleActivityModal } = activityModalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectActivityModal = (state: RootState) =>
  state.activityModal.isModalOpen;

export default activityModalSlice.reducer;
