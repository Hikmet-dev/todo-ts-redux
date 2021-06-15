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
};

interface TaskState extends Tasks {
    isLoading: boolean;
    hasError: boolean;
    changeElement: any;
};

interface GetParams {
    order: string;
    filterBy: string;
    activePage: number;
    itemPerPage: number;
};

export const fetchTask: any = createAsyncThunk(
    'task/fetchToken',
    async (params: GetParams) => {
        const res = await instance.get<Task>('tasks', {params: {
            order: params.order,
            filterBy: params.filterBy,
            page: params.activePage,
            taskCount: params.itemPerPage
        }} );
        return res.data
    });

export const createTask: any = createAsyncThunk(
    'task/createTask',
    async (task: string) => {
        const res = await instance.post('task', {name: task, done: false});
        return res.data;
    }
);

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
    isLoading: false,
    hasError: false,
    changeElement: null
};

export const taskSlice  = createSlice({
    name: 'task',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchTask.pending]: (state) => {
            state.isLoading = false;
            state.hasError = false;
        },
        [fetchTask.fulfilled]: (state, action: PayloadAction<Tasks>) => {
            state.tasks = action.payload.tasks;
            state.pageCount = action.payload.pageCount;
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchTask.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [createTask.pending]: (state) => {
            state.isLoading = true;
        },
        [createTask.fulfilled]: (state) => {
            state.changeElement = !state.changeElement
        },
        [createTask.rejected]: (state) => {
            state.hasError = true
        },
        [changeTaskName.pending]: (state) => {
        },
        [changeTaskName.fulfilled]: (state) => {
            state.changeElement = !state.changeElement
        },
        [changeTaskName.rejected]: (state) => {
            state.hasError = true;
        },
        [changeDoneStatus.pending]: (state) => {
            state.isLoading = true;
        },
        [changeDoneStatus.fulfilled]: (state) => {
            state.changeElement = !state.changeElement
        },
        [changeDoneStatus.rejected]: (state) => {
            state.hasError = true
        },
        [deleteTask.pending]: (state) => {
            state.isLoading = true;
        },
        [deleteTask.fulfilled]: (state) => {
            state.changeElement = !state.changeElement
        },
        [deleteTask.rejected]: (state)=> {
            state.hasError = true
        }
    }
});



export const selectTasks = (state: RootState) => state.task.tasks;
export const selectPageCount = (state: RootState) => state.task.pageCount;
export const selectIsLoading = (state: RootState) => state.task.isLoading;
export const selectChangeElement = (state: RootState) => state.task.changeElement;

export default taskSlice.reducer;