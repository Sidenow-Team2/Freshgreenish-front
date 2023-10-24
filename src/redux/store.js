import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';

export default configureStore({
  reducer: {
    user: loginReducer,
  },
});
