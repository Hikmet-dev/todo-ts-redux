import { createAsyncThunk, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../instance';



interface Task {
    tasks: {}[],
    pageCount: number,
    isLoading: boolean,
    hasError: boolean
}


export const fetchTask: any = createAsyncThunk(
    'user/fetchToken',
    async (params:any, thunkAPI) => {
        const { data }: any = instance.get('tasks', params);
        return data
    })
};


const initialState: Task = {
    tasks = [],
    pageCount: 1,
    isLoading: false,
    hasError: false
}





export const taskSlice  = createSlice({
    name: 'task',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchTask.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [fetchTask.fulfilled]: (state, action: PayloadAction<Task>) => {
            state.tasks = action.payload.tasks;
            state.pageCount = action.payload.pageCount;
            state.isLoading = false;
            state.hasError = false;
        }
    }
}) 

export default taskSlice.reducer;