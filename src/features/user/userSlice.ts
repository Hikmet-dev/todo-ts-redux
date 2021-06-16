import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { instance } from '../../instance'

export const fetchUser: any =  createAsyncThunk(
    'user/fetchToken',
    async (user: {[userData: string]: string}, thunkAPI) => { 
        const res = await instance.post(`login`, user);
        return res.data
    }
);

export const userRegistration: any = createAsyncThunk(
    'user/registration',
    async (user: {[userData: string]: string}, thunkAPI) => {
        const res = await instance.post(`signup`, user);
        return res.data 
    });

export interface User {
    firstName: string;
    lastName: string;
    token: string;
    email?: string;
    password?: string;
    isLoading?: boolean;
    hasError?: boolean;
}

const initialState: User = {
    firstName: sessionStorage.firstName || '',
    lastName: sessionStorage.lastName || '',
    token: sessionStorage.token || '',
    isLoading: true,
    hasError: false
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearUserData: (state) => {
            state.firstName = state.lastName = state.token = '';
            state.isLoading = state.hasError = false;
        }
    },
    extraReducers: {
        [fetchUser.pending]: (state) => {
            state.isLoading = false
            state.hasError = false
        },
        [fetchUser.fulfilled]: (state, action: PayloadAction<User>) => {
            state.token = action.payload.token;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            sessionStorage.setItem('token', state.token);
            sessionStorage.setItem('firstName', state.firstName);
            sessionStorage.setItem('lastName', state.lastName);
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [userRegistration.pending]: (state) => {
            state.isLoading = false
            state.hasError = false
        },
        [userRegistration.fulfilled]: (state, action: PayloadAction<User>) => {
            state.token = action.payload.token;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            sessionStorage.setItem('token', state.token);
            sessionStorage.setItem('firstName', state.firstName);
            sessionStorage.setItem('lastName', state.lastName);
            state.isLoading = true;
            state.hasError = false;
        },
        [userRegistration.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export const { clearUserData } = userSlice.actions;

export const selectToken = (state: RootState) => state.user.token;
export const selectFirstName = (state: RootState) => state.user.firstName;
export const selectLastName = (state: RootState) => state.user.lastName;
export const selectIsLoading = (state: RootState) => state.user.isLoading;

export default userSlice.reducer;