import { createSlice } from '@reduxjs/toolkit';
import {getData} from './thunks';

const initialState={
   data: []
};

const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers:{
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) =>{
      return ({
        ...state,
        data: action.payload
      })
    });
  },
});

export default homeSlice.reducer;

