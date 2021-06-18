import React, { useState } from 'react';
import { ListItemText , ListItem, ListItemIcon, ListItemSecondaryAction, IconButton, Checkbox, Input, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteTask, Task, changeTask } from './taskSlice';
import { DraggableProvided } from 'react-beautiful-dnd';


export const ToDoListItem = (props: {task: Task, provided: DraggableProvided} ) => {
  const {task, provided} = props;
  const dispatch = useDispatch();
  const [changeInput, setChangeInput] = useState(false);
  const [disab, setDisab] = useState(false);

  const changeTaskName = (e: React.KeyboardEvent<HTMLElement> | 
    React.ChangeEvent<HTMLElement>) =>  { 
      const {key} = (e as React.KeyboardEvent<HTMLDivElement>);
      const {target} = (e as React.ChangeEvent<HTMLInputElement>);
      if (key === 'Enter' && target.value.trim()){
        dispatch(changeTask({id: target.name, name: target.value}))
      }
  };

  const changeDoneStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {target} = (e as React.ChangeEvent<HTMLInputElement>);
      if(typeof target.checked=== 'boolean') {
        dispatch(changeTask({id: target.name, done: target.checked}));
      }
    };

  const date = task.createdAt.match(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
  const time = task.createdAt.match(/T(((([0-1][0-9])|(2[0-3])):?[0-5][0-9]))/g);
  const dateTime: string =  date !== null && time !== null ? `${time[0].replace('T', '')} ${date[0]}`: "Not date";

 return(
   <Grid container>
    <ListItem {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef} >
      <Grid item xs={1}>
      <ListItemIcon>
        <Checkbox 
          color="primary"
          name={task.id}  
          onChange={(e)=> changeDoneStatus(e)} 
          checked={task.done} 
          value={task.id} 
        />
      </ListItemIcon>
      </Grid>
      <Grid item xs={8}>
      {changeInput 
        ? (<Input
            fullWidth
            defaultValue={task.name}
            autoFocus={true}
            name={task.id}
            onBlur={() => setChangeInput(!changeInput)} 
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Escape" && setChangeInput(false)} 
            onKeyPress={e => changeTaskName(e)}
            onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" &&  setChangeInput(false)}
          />) 
        : (<ListItemText  
            primary={task.name}  
            onClick={() => setChangeInput(!changeInput)}
          />)
      }
      </Grid>
        <Grid item xs={2}>
        <ListItemText  primary={dateTime} />
        </Grid>
      <Grid item xs={1}>
        <ListItemSecondaryAction>
                    <IconButton 
                      edge="end" 
                      disabled={disab} 
                      aria-label="delete" 
                      onClick={(e) => {dispatch(deleteTask(e.currentTarget.value)); setDisab(true);}} 
                      value={task.id}>
                      <DeleteIcon />
                    </IconButton>
        </ListItemSecondaryAction>
        </Grid>
        </ListItem>
   </Grid>
      
 )   
};