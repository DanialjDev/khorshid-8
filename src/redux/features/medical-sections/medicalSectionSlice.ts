import { Category } from "@/services/medical-equipment";
import { OperationNames } from "@/services/medical-equipment/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  sectionName: Category;
} = {
  sectionName: "GetDevices",
};

const medicalSlice = createSlice({
  name: "medical-section",
  initialState,
  reducers: {
    setSection: (state, action) => {
      state.sectionName = action.payload;
      return state;
    },
  },
});

export const { setSection } = medicalSlice.actions;
export default medicalSlice.reducer;
