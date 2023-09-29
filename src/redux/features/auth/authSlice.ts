import { Action } from "@/utills/validation/auth/validation";
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface InitialState {
  authAction: Action;
  showForm: boolean;
  isLoggedIn: boolean;
  email: string;
  username: string;
}

const initialState: InitialState = {
  authAction: "",
  showForm: false,
  isLoggedIn: false,
  email: "",
  username: "",
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
    setEmail: (state, action) => {
      state.email = action.payload;
      return state;
    },
    setUserName: (state, action) => {
      state.username = action.payload;
      return state;
    },
  },
});

export const {
  authToggler,
  setShowForm,
  setIsLoggedIn,
  setEmail,
  setUserName,
} = AuthSlice.actions;

export default AuthSlice.reducer;
