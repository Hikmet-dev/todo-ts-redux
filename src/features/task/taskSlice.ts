import { RootState} from './../../app/store';
import { createAsyncThunk, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../instance';
import { Filters } from '../filter/filterSlice';

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
    taskCount: number;
    page: number;
    isLoading: boolean;
    hasError: boolean;
};

export interface QueryURL {
    order: string;
    filterBy: string;
    page: number;
    taskCount: number;
};

export const fetchTask: any = createAsyncThunk(
    'task/fetchTask',
    async(URL, {getState}) => {
        const {filter} = getState() as {filter: Filters};
        const {task} = getState() as {task: TaskState}
        const res = await instance.get('tasks', 
        {params: {
            order: filter.order,
            filterBy: filter.filterBy,
            page: task.page,
            taskCount: task.taskCount
        }});
        return res.data;
    }
)

export const createTask: any = createAsyncThunk<{name: string}, {state: RootState}>(
    'task/createTask',
    async(name , {getState}) => {
        const {filter} = getState() as {filter: Filters};
        const {task} = getState() as {task: TaskState}

        const res = await instance.post('task', {name: name}, {params: {
            order: filter.order,
            filterBy: filter.filterBy,
            page: task.page,
            taskCount: task.taskCount
        }}
        );        
        return res.data;
    }
);

export const changeTask: any = createAsyncThunk(
    'task/changeTask',
    async(changingTask: {id: string, name?: string, done?: boolean}, {getState}) => {
        const {filter} = getState() as {filter: Filters};
        const {task} = getState() as {task: TaskState};

        let putshData;
        if(changingTask.name)  putshData = {name: changingTask.name};
        if(typeof changingTask.done === 'boolean') putshData = {done: changingTask.done} ;


        const res = await instance.patch(`task/${changingTask.id}`,
            putshData,
            {params: {
                order: filter.order,
                filterBy: filter.filterBy,
                page: task.page,
                taskCount: task.taskCount
            }});
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
    'task/deleteTask',
    async(taskId: string, {getState}) => {
        const {filter} = getState() as {filter: Filters};
        const {task} = getState() as {task: TaskState};

        const res = await instance.delete(`task/${taskId}`, 
        {params: {
            order: filter.order,
            filterBy: filter.filterBy,
            page: task.page,
            taskCount: task.taskCount
        }});
        return res.data;
    }
);

const initialState: TaskState = {
    tasks: [],
    pageCount: 1,
    page: 1, 
    isLoading: false,
    hasError: false,
    taskCount: 5
};

export const taskSlice  = createSlice({
    name: 'task',
    initialState,
    reducers: {
        changeActivePage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        changeTaskCount: (state, action: PayloadAction<number>) => {
            state.taskCount = action.payload;
        }
    },
    extraReducers: {
        [fetchTask.pending]: (state) => {
            state.isLoading = false;
        },
        [fetchTask.fulfilled]: (state, action: PayloadAction<Tasks>) => {
            state.tasks = action.payload.tasks;
            state.pageCount = action.payload.pageCount;
            state.isLoading = true;
        },
        [fetchTask.rejected]: (state) => {
            state.isLoading = true;
            state.hasError = true;
        },
        [createTask.pending]: (state) => {
            state.isLoading = true;
        },
        [createTask.fulfilled]: (state, action) => {           
            state.tasks = action.payload.tasks;
            state.pageCount = action.payload.pageCount;
            state.isLoading = true
            
        },
        [createTask.rejected]: (state) => {
            state.isLoading = true;
            state.hasError = true;
        },
        [changeTask.pending]: (state) => {
            state.isLoading = true;
        },
        [changeTask.fulfilled]: (state, action: PayloadAction<Tasks>) => {
            state.tasks = action.payload.tasks;
            state.pageCount = action.payload.pageCount;
            state.isLoading = true
        },
        [changeTask.rejected]: (state)=> {
            state.isLoading = true;
            state.hasError = true;
        },
        [deleteTask.pending]: (state) => {
            state.isLoading = true;
        },
        [deleteTask.fulfilled]: (state, action: PayloadAction<Tasks>) => {
            state.tasks = action.payload.tasks;
            state.pageCount = action.payload.pageCount;
            state.isLoading = true;
        },
        [deleteTask.rejected]: (state)=> {
            state.isLoading = true;
            state.hasError = true;
        }
    }
});

export const {changeActivePage, changeTaskCount} = taskSlice.actions;

export const selectTasks = (state: RootState) => state.task.tasks;
export const selectPageCount = (state: RootState) => state.task.pageCount;
export const selectIsLoading = (state: RootState) => state.task.isLoading;
export const selectPage = (state: RootState) => state.task.page;
export const selectTaskCount = (state: RootState) => state.task.taskCount;

export default taskSlice.reducer;