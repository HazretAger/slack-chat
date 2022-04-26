import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "post",
  initialState: [
    {
      username: "author",
      message: "Hello",
    },
  ],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addPost } = counterSlice.actions;

export default counterSlice.reducer;
