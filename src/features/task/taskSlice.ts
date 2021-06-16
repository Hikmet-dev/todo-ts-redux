import { RootState } from './../../app/store';
import { createAsyncThunk, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../instance';

export interface Task {
        id: string;
        name: string;
        done: boolean;
        createdAt: string;
}

export interface Tasks {
    tasks: Task[];
    pageCount: number;
    activePage: number;
};

interface TaskState extends Tasks {
    isLoading: boolean;
    hasError: boolean;
};

export const changeTaskName: any = createAsyncThunk(
    'task/changeTaskName',
    async (changingName: {id: string, name: string} ) => {
        const res = await instance.patch(`task/${changingName.id}`, {name: changingName.name});
        
        return res.data;
    }
);

export const changeDoneStatus: any = createAsyncThunk(
    'task/changeDoneStatus',
    async(changingDoneStatus: {id: string, done: boolean}) => {
        const res = await instance.patch(`task/${changingDoneStatus.id}`, {done: changingDoneStatus.done});

        return res.data;
    }
);

export const deleteTask: any = createAsyncThunk(
    'task/deketetask',
    async(taskId: string) => {
        const res = await instance.delete(`task/${taskId}`);
        return res.data;
    }
);

const initialState: TaskState = {
    tasks: [],
    pageCount: 1,
    activePage:1, 
    isLoading: false,
    hasError: false
};

export const taskSlice  = createSlice({
    name: 'task',
    initialState,
    reducers: {
        changeActivePage: (state, action: PayloadAction<number>) => {
            state.activePage = action.payload;
        },
        addTasks: (state, action) => {
            state.tasks = action.payload.tasks;
            state.pageCount = action.payload.pageCount;
        },
        changeLoadStatus: (state, actions) => {
            state.isLoading = actions.payload;
        }

    },
    extraReducers: {
        [changeTaskName.pending]: (state) => {


        },
        [changeTaskName.fulfilled]: (state) => {

        },
        [changeTaskName.rejected]: (state) => {

        },
        [changeDoneStatus.pending]: (state) => {


        },
        [changeDoneStatus.fulfilled]: (state) => {

        },
        [changeDoneStatus.rejected]: (state) => {

        },
        [deleteTask.pending]: (state) => {

 
        },
        [deleteTask.fulfilled]: (state) => {

        },
        [deleteTask.rejected]: (state)=> {

        }
    }
});

export const {changeActivePage, addTasks, changeLoadStatus} = taskSlice.actions;

export const selectTasks = (state: RootState) => state.task.tasks;
export const selectPageCount = (state: RootState) => state.task.pageCount;
export const selectIsLoading = (state: RootState) => state.task.isLoading;
export const selectActivePage = (state: RootState) => state.task.activePage;

export default taskSlice.reducer;