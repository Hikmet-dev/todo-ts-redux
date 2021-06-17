import React from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createTask } from '../features/task/taskSlice';

export const  CreateToDo = () =>  {
    const dispatch = useDispatch();

    const handleNewToDo = (e: React.KeyboardEvent<HTMLDivElement> | 
        React.ChangeEvent<HTMLInputElement>) => {
            const {key} = (e as React.KeyboardEvent<HTMLDivElement>);
            const {target} = (e as React.ChangeEvent<HTMLInputElement>);
            if (key === "Enter" && target.value.trim()) {          
                dispatch(createTask(target.value));
                target.value = '';
              }
        };
    return (
        <TextField 
        margin='normal'
        id="outlined-basic" 
        label="New to do" 
        variant="outlined" 
        size="small" 
        fullWidth 
        type="text" 
        onKeyPress={e =>handleNewToDo(e)} 
        />
        )
};