// import node_modules
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import reducers
import authSlice from '../containers/App/authSlice';

// main
const appReducer = combineReducers({
  auth: authSlice,
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout') {
    state = {
      metadata: state.metadata,
    };
    AsyncStorage.removeItem('persist:root');
  }

  return appReducer(state, action);
};

export default rootReducer;
