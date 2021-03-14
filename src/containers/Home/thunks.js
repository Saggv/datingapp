import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getData = createAsyncThunk(
  'home/fetchData',
  async()=>{
    const {data} = await axios.get('https://randomuser.me/api/?gender=female&results=50');
    return data.results;
  }
);
