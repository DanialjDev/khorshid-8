import { Action } from "@/utills/validation/auth/validation";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  currentDeviceNumber: number;
  selectedDeviceId: number | null;
  id: number;
}

const initialState: InitialState = {
  currentDeviceNumber: 0,
  selectedDeviceId: null,
  id: 0,
};

const AuthSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDeviceNumber: (state, action) => {
      state.currentDeviceNumber = action.payload;
      return state;
    },
    setDeviceId: (state, action) => {
      state.selectedDeviceId = action.payload;
      return state;
    },
    setId: (state, action) => {
      state.id = action.payload;
      console.log(action);
      return state;
    },
  },
});

export const { setDeviceNumber, setDeviceId, setId } = AuthSlice.actions;

export default AuthSlice.reducer;
