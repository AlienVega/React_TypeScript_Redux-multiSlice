import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./slices/formSlice";
import { courseReducer } from "./slices/courseSlice";
const rootReducer = {
  form: formReducer,
  courses: courseReducer,
};
export const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;
