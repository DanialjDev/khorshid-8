import { Action } from "@/utills/validation/auth/validation";
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface InitialState {
  authAction: Action;
  showForm: boolean;
  isLoggedIn: boolean;
}

const initialState: InitialState = {
  authAction: "",
  showForm: false,
  isLoggedIn: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authToggler: (state, action) => {
      state.authAction = action.payload;
      if (!state.showForm) {
        state.showForm = true;
      }

      return state;
    },
    setShowForm: (state, action) => {
      state.showForm = action.payload;
      return state;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
      return state;
    },
  },
});

export const { authToggler, setShowForm, setIsLoggedIn } = AuthSlice.actions;

export default AuthSlice.reducer;
