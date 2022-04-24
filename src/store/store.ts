import { configureStore } from '@reduxjs/toolkit';
import channelReducer from './reducers/channelReducer';

export default configureStore({
  reducer: {
    channel: channelReducer
  }
})