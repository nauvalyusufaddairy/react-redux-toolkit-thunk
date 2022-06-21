import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "1",
    title: "learnin redux toolkit",
    content: "i've heard a good things.",
  },
  {
    id: "1",
    title: "slices......",
    content: "the more i say slice, the more i want pizza",
  },
];
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: (state, action) => state.push(action.payload),
  },
});
export default postSlice.reducer;
export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postSlice.actions;
