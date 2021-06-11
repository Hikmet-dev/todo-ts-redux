import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
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


export const userLogin = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})