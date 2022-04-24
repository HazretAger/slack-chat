import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'channel',
  initialState: {
    topics: ["#general", "#random"]
  },
  reducers: {
      addChannel: (state, action) => {
        state.topics.push(`#${action.payload}`);
      }
  }
})

export const { addChannel } = counterSlice.actions

export default counterSlice.reducer

