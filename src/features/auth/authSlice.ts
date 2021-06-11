import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';



export interface Auth {
    loginForm: boolean;
    authStatus: boolean;
};

const initialState: Auth ={ 
    loginForm: true,
    authStatus: false
};

export const authSlice = createSlice({
    name:  'auth',
    initialState,
    reducers: {
      toggleLoginForm: (state) => {
          state.loginForm = !state.loginForm
      },
      toggleAuthStatus: (state, action: PayloadAction<boolean>) => {
          state.authStatus = action.payload;
      },
      logOut: (state) =>  {
        sessionStorage.clear();
        state.authStatus = false;
      }
    }
});

export const { toggleLoginForm, toggleAuthStatus, logOut  } = authSlice.actions;

export const selectLoginForm = (state: RootState)  => state.auth.loginForm;
export const selectAuthStatus = (state: RootState) => state.auth.authStatus;

export default authSlice.reducer;