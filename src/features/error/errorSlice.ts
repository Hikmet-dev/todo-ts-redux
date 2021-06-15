import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const initialState = {
    errorStatus: false,
    statusCode: '',
    errorMesage: '',
    errorStack: {}
}

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        createError: (state, action: PayloadAction<any>) =>{
            state.statusCode = action.payload.statusCode;
            state.errorMesage = action.payload.message;
            state.errorStatus = true;
            console.log('createError');
        },
        closeError: (state, action: PayloadAction<any>) => {
            if(action.payload === 'clickaway') return;
            state.errorStatus = false;
            state.statusCode = state.errorMesage = '';
            state.errorStack = {};
        }
    }
});

export const { createError, closeError } = errorSlice.actions;

export const selectErrorStatus = (state: RootState) => state.error.errorStatus;
export const selectErrorStatusCode = (state: RootState) => state.error.statusCode;
export const selectErrorMesage = (state: RootState) => state.error.errorMesage;
export const selectErrorStack = (state: RootState) => state.error.errorStack;

export default errorSlice.reducer;