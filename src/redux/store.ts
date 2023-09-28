import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import medicalSectionSlice from "./features/medical-sections/medicalSectionSlice";
import imageSlice from "./features/image-modal/imageSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    medicalSection: medicalSectionSlice,
    modal: imageSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
