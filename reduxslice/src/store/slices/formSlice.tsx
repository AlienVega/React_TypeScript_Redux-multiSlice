import { createSlice } from "@reduxjs/toolkit";
import { addCourse } from "./courseSlice";
type FormState = {
  name: string;
  description: string;
  cost: number;
};
const initialState: FormState = {
  name: "",
  description: "",
  cost: 0,
};
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    chanceName(state, action) {
      state.name = action.payload;
    },
    chanceDescription(state, action) {
      state.description = action.payload;
    },
    chanceCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCourse, (state) => {
      state.name = "";
      state.description = "";
      state.cost = 0;
    });
  },
});
export const { chanceName, chanceDescription, chanceCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
