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
    page: number;
    isLoading: boolean;
    hasError: boolean;
    taskCount: number;
};

export interface QueryURL {
    order: string;
    filterBy: string;
    page: number;
    taskCount: number;
};

export const fetchTask = createAsyncThunk(
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

export const createTask = createAsyncThunk<Tasks, string, {state: RootState}>(
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

export const changeTask = createAsyncThunk<Tasks, {id: string, name?: string, done?: boolean}, {state: RootState} >(
    'task/changeTask',
    async(changingTask, {getState}) => {
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

export const deleteTask = createAsyncThunk<Tasks, string, {state: RootState}>(
    'task/deleteTask',
    async(taskId, {getState}) => {
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

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        changeActivePage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        changeTaskCount: (state, action: PayloadAction<number>) => {
            state.taskCount = action.payload;
        },
        updateTasksList: (state, action) => {
            state.tasks = action.payload;
            
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchTask.pending, (state) => {
            state.isLoading = false;
        })
        builder.addCase(fetchTask.fulfilled, (state, action: PayloadAction<Tasks>) => {
            state.tasks = action.payload.tasks;
            state.pageCount = action.payload.pageCount;
            state.isLoading = true;
        })
        builder.addCase(fetchTask.rejected, (state) => {
            state.isLoading = true;
            state.hasError = true;
        })
        builder.addCase(createTask.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(createTask.fulfilled, (state, action) => {           
            state.tasks = action.payload.tasks;
            state.pageCount = action.payload.pageCount;
            state.isLoading = true
            
        })
        builder.addCase(createTask.rejected,  (state) => {
            state.isLoading = true;
            state.hasError = true;
        })
        builder.addCase(changeTask.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(changeTask.fulfilled, (state, action: PayloadAction<Tasks>) => {
            state.tasks = action.payload.tasks;
            state.pageCount = action.payload.pageCount;
            state.isLoading = true
        })
        builder.addCase(changeTask.rejected, (state)=> {
            state.isLoading = true;
            state.hasError = true;
        })
        builder.addCase(deleteTask.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(deleteTask.fulfilled, (state, action: PayloadAction<Tasks>) => {
            state.tasks = action.payload.tasks;
            state.pageCount = action.payload.pageCount;
            state.isLoading = true;
        })
        builder.addCase(deleteTask.rejected, (state)=> {
            state.isLoading = true;
            state.hasError = true;
        })
    }
});

export const {changeActivePage, changeTaskCount, updateTasksList} = taskSlice.actions;

export const selectTasks = (state: RootState) => state.task.tasks;
export const selectPageCount = (state: RootState) => state.task.pageCount;
export const selectIsLoading = (state: RootState) => state.task.isLoading;
export const selectPage = (state: RootState) => state.task.page;
export const selectTaskCount = (state: RootState) => state.task.taskCount;

export default taskSlice.reducer;