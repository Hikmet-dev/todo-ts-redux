import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { instance } from '../../instance'

 
export const loginUser = createAsyncThunk(
    'user/login',
    async (user: {[userData: string]: string}, thinkApi) => {
        const { data }: any = instance.post('login', user);
        return data
    }
)

export interface User {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    token: string;
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
    }
})


export const { clearUserData } = userSlice.actions;

export const selectToken = (state: RootState) => state.user.token;
export const selectFirstName = (state: RootState) => state.user.firstName;
export const selectLastName = (state: RootState) => state.user.lastName;
export const selectIsLoading = (state: RootState) => state.user.isLoading;

export default userSlice.reducer;