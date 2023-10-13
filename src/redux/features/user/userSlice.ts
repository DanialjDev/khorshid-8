import { Action } from "@/utills/validation/auth/validation";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  currentDeviceNumber: number;
}

const initialState: InitialState = {
  currentDeviceNumber: 0,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setDeviceNumber: (state, action) => {
      state.currentDeviceNumber = action.payload;
      return state;
    },
  },
});

export const { setDeviceNumber } = AuthSlice.actions;

export default AuthSlice.reducer;
