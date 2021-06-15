import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createTask } from '../features/task/taskSlice';

export const  CreateToDo = () =>  {
    const dispatch = useDispatch();
    
    const [newToDo, setNewToDo] = useState('');
    const handleNewToDo = (e: any) => {
        setNewToDo(e.target.value);
      };
    return (
        <TextField 
            id="outlined-basic" 
            label="New to do" 
            variant="outlined" 
            size="small" 
            fullWidth={true} 
            type="text" 
            value={newToDo} 
            onChange={e => handleNewToDo(e)} 
            onKeyPress={() => dispatch(createTask(newToDo))} 
            onKeyUp={e => e.key === "Enter" && setNewToDo('')} 
        />
        )
}
