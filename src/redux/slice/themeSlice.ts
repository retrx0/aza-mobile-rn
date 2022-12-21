import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

// Define a type for the slice state
interface ThemeState {
  theme: "dark" | "light" | "system";
}

// Define the initial state using that type
const initialState: ThemeState = {
  theme: "system",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setAppTheme: (state, action: PayloadAction<ThemeState>) => {
      state.theme = action.payload.theme;
    },
  },
});

export const { setAppTheme } = themeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAppTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
