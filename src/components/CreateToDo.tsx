import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

export const  CreateToDo: any = ({onKeyPress}: any) =>  {
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
            onKeyPress={onKeyPress} 
            onKeyUp={e => e.key === "Enter" && setNewToDo('')} 
        />
        )
}
