import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  showModal: boolean;
  imageUrl: string;
}

const initialState: InitialState = {
  showModal: false,
  imageUrl: "",
};

const imgSlice = createSlice({
  name: "img-modal",
  initialState,
  reducers: {
    setShowImgModal: (state, action) => {
      state.showModal = action.payload;
      return state;
    },
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
      return state;
    },
  },
});

export const { setShowImgModal, setImageUrl } = imgSlice.actions;
export default imgSlice.reducer;
