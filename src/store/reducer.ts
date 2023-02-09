import {combineReducers} from '@reduxjs/toolkit';
import orderSlice from '../slices/orderSlice';
import userSlice from '../slices/userSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  order: orderSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
