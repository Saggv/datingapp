import { createSlice } from '@reduxjs/toolkit';
import {getData} from './action';

const initialState={
   data: []
};

const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers:{
  },
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.data = [];
    }
  }
});

export default homeSlice.reducer;

