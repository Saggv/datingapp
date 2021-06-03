// import node_modules
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import reducers
import authSlice from '../containers/App/authSlice';
import homeSlice from '../containers/Home/slice';
import messageSlice from '../containers/Message/message.slice';

// main
const appReducer = combineReducers({
  auth: authSlice,
  home: homeSlice,
  message: messageSlice
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout') {
     state={};
    AsyncStorage.removeItem('persist:root');
  }

  return appReducer(state, action);
};

export default rootReducer;
