import { Action } from "@/utills/validation/auth/validation";
import { createSlice } from "@reduxjs/toolkit";

type UpdateAction = "homeSideBanner" | "medicalEquipment" | "gallery" | "";

interface InitialState {
  authAction: Action;
  showForm: boolean;
  isLoggedIn: boolean;
  email: string;
  username: string;
  isLinkRequired: boolean;
  updateAction: UpdateAction;
}

const initialState: InitialState = {
  authAction: "",
  showForm: false,
  isLoggedIn: false,
  email: "",
  username: "",
  isLinkRequired: false,
  updateAction: "",
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
    setLinkRequired: (state, action) => {
      state.isLinkRequired = action.payload;
      return state;
    },
    setUpdateAction: (state, action) => {
      state.updateAction = action.payload;
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
  setLinkRequired,
  setUpdateAction,
} = AuthSlice.actions;

export default AuthSlice.reducer;
