import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authClise from '../features/auth/authSlice';
import userSlice  from '../features/user/userSlice';
import filterSlice from '../features/filter/filterSlice';
import errorSlice from '../features/error/errorSlice';
import taskSlice from '../features/task/taskSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authClise,
    user: userSlice,
    filter: filterSlice,
    error: errorSlice,
    task: taskSlice
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
