import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';



const initialState = {
    filterByButtons: ['all', 'done', 'undone'],
    filterBy: 'all',
    orderValue: ['ASC', 'DESC'],
    order: 'DESC'
};

export const  filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        toggleOrder: (state, action: PayloadAction<string>)=> {
            state.order = action.payload;
        },
        toggleFilterBy: (state, action: PayloadAction<string>): any => {
            state.filterBy = action.payload;
        }
    }
});

export const {toggleOrder, toggleFilterBy} = filterSlice.actions;

export const selectOrderValue = (state: RootState) => state.filter.orderValue;
export const selectFilterBy = (state: RootState) => state.filter.filterBy;
export const selectOrder = (state: RootState) => state.filter.order.toUpperCase();
export const selectFilterByButtons = (state: RootState) => state.filter.filterByButtons;

export default filterSlice.reducer;