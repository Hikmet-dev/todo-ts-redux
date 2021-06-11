import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authClise from '../features/auth/authSlice';
import userSlice  from '../features/user/userSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authClise,
    user: userSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
