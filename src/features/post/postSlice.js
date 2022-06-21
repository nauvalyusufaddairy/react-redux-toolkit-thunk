import { createSlice, nanoid } from "@reduxjs/toolkit";
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
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});
export default postSlice.reducer;
export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postSlice.actions;
