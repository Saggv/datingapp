import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initState = {
  token: '',
  isLoggedIn: false,
  profile: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    login (state, action) {
      // const { token, profile } = action.payload;
      // state.token = token;
      state.isLoggedIn = true;
      // state.profile = profile.profile;
    },
    logout (state, action) {
      state = initState;
      AsyncStorage.removeItem('persist: root');
      console.log(      state.isLoggedIn )
    },
    updateProfile (state, action) {
      const { profile } = action.payload;
      state.profile = profile;
    },
  },
});

export const { login, logout, updateProfile } = authSlice.actions;

export default authSlice.reducer;
