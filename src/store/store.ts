import { configureStore } from '@reduxjs/toolkit';
import channelReducer from './reducers/channelReducer';
import chatReducer from './reducers/chatReducer';

export default configureStore({
  reducer: {
    channel: channelReducer,
    posts: chatReducer
  }
})