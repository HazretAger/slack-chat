import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'channels',
  initialState: {
    activeChannel: 0,
    channels: [
      {
        channelName: '#general',
        posts: [
          {
            userName: 'Hazret',
            message: 'Hello'
          }
        ],
      },
      {
        channelName: '#random',
        posts: [
          {
            userName: 'Amir',
            message: 'Hi'
          }
        ],
      },
    ]
  },
  reducers: {
      addNewChannel: (state, action) => {
        state.channels.push(action.payload);
      },
      addNewPost: (state, action) => {
        const id = state.activeChannel;
        state.channels[id].posts.push(action.payload);
      },
      activeChannelId: (state, action) => {
        state.activeChannel = action.payload
      },
  }
})

export const { addNewChannel, activeChannelId, addNewPost } = counterSlice.actions

export default counterSlice.reducer

