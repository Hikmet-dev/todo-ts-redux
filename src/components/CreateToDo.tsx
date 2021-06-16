import React from 'react';
import { TextField } from '@material-ui/core';


export const  CreateToDo = (props: any) =>  {
    const {handleNewToDo} = props;
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
}
