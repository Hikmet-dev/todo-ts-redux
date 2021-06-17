import React, { useEffect} from  'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Grid, List, LinearProgress} from '@material-ui/core';
import { CreateToDo }  from '../../components/CreateToDo';
import { Pagination } from '../../components/Pagination';
import { ToDoListItem } from './ToDoListItem';
import { FilterPanel } from '../filter/FilterPanel';

import { selectTasks, selectIsLoading, selectPageCount, Task,  createTask, fetchTask } from './taskSlice';


export const ToDoList = () => {
  const tasks = useSelector(selectTasks);
  const isLoading = useSelector(selectIsLoading);
  const pageCount = useSelector(selectPageCount);
  const dispatch = useDispatch()


  useEffect(() => {
    if(sessionStorage.token) {
      dispatch(fetchTask());
    }
  }, [dispatch]);

  const handleNewToDo = async (e: React.KeyboardEvent<HTMLDivElement> | 
    React.ChangeEvent<HTMLInputElement>) => {
        const {key} = (e as React.KeyboardEvent<HTMLDivElement>);
        const {target} = (e as React.ChangeEvent<HTMLInputElement>);
        if (key === "Enter" && target.value.trim()) {          
            dispatch(createTask(target.value));
            target.value = '';
          }
    };
  return(
      <Container maxWidth="md">
        <Grid>
        <Grid>
          <CreateToDo handleNewToDo={handleNewToDo} />
          </Grid>
          <FilterPanel />
          <Grid item alignItems="center" container xs={12}>
              {isLoading && (pageCount > 1 && <Pagination />) }
          </Grid>
          <List>
      {isLoading
              ?  (tasks.map((task: Task) => <ToDoListItem key={task.id} task={task} />)) 
              :   <LinearProgress />
              }
          </List>
        </Grid>
      </Container>
  );
};