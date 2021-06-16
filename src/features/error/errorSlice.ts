import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


interface Error {
    errorStatus: boolean;
    statusCode: number | null;
    message: string;
    errorStack: {};
}


const initialState: Error = {
    errorStatus: false,
    statusCode: null,
    message: '',
    errorStack: {}
}

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        createError: (state, action: PayloadAction<Error>) =>{
            state.statusCode = action.payload.statusCode;
            state.message = action.payload.message;
            state.errorStatus = true;
            console.log('createError');
        },
        closeError: (state, action: PayloadAction<any>) => {
            state.errorStatus = false;
            state.message = state.message = '';
            state.errorStack = {};
        }
    }
});

export const { createError, closeError } = errorSlice.actions;

export const selectErrorStatus = (state: RootState) => state.error.errorStatus;
export const selectErrorStatusCode = (state: RootState) => state.error.statusCode;
export const selectErrorMesage = (state: RootState) => state.error.message;
export const selectErrorStack = (state: RootState) => state.error.errorStack;

export default errorSlice.reducer;