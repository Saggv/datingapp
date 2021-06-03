import { createSlice } from '@reduxjs/toolkit';
import {getRoomChat} from './message.actions';

const initState = {
  roomChat: [],
};

const messageSlice = createSlice({
  name: 'message',
  initialState: initState,
  reducers: {
  },
  extraReducers: {
    [getRoomChat.fulfilled]: (state, action) => {
      state.roomChat = action.payload;
    }
  }
});

// export const { getRoomChat } = messageSlice.actions;

export default messageSlice.reducer;
