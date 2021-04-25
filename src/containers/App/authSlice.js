import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initState = {
  token: '',
  isLoggedIn: false,
  profile: {},
  id: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    login (state, action) {
      // const { token, profile } = action.payload;
      // state.token = token;
      state.isLoggedIn = true;
      state.id = action.payload.id;
      // state.profile = 
    },
    logout (state, action) {
      state = initState;
      AsyncStorage.removeItem('persist: root');
    },
    updateProfile (state, action) {
      const { profile } = action.payload;
      state.profile = profile;
    },
    getCurrentUser(state, action){
      console.log(action.payload);
      state.profile = action.payload
    }
  },
});

export const { login, logout, updateProfile, getCurrentUser } = authSlice.actions;

export default authSlice.reducer;
