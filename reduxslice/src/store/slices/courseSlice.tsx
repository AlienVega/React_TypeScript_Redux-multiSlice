import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
interface CourseData {
  name: string;
  description: string;
  cost: number;
  id: string;
}
interface CourseState {
  searchTerm: string;
  data: CourseData[];
}
const initialState: CourseState = {
  searchTerm: "",
  data: [],
};
const courseSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addCourse(state, action: PayloadAction<CourseData>) {
      state.data.push({
        name: action.payload.name,
        description: action.payload.description,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    changeSearch(state, action) {
      state.searchTerm = action.payload;
    },
    removeCourse(state, action) {
      const updatedCourses = state.data.filter((data) => {
        return data.id !== action.payload;
      });
      state.data = updatedCourses;
    },
  },
});
export const { addCourse, removeCourse, changeSearch } = courseSlice.actions;
export const courseReducer = courseSlice.reducer;
