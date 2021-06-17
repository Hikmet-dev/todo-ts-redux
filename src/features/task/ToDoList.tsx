import React, { useEffect} from  'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Grid, List, LinearProgress} from '@material-ui/core';
import { CreateToDo }  from '../../components/CreateToDo';
import { Pagination } from '../../components/Pagination';
import { ToDoListItem } from './ToDoListItem';
import { FilterPanel } from '../filter/FilterPanel';
import { selectTasks, selectIsLoading, selectPageCount, Task, fetchTask } from './taskSlice';

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

  return(
      <Container maxWidth="md">
        <Grid>
          <Grid>
            <CreateToDo />
          </Grid>
          <FilterPanel />
          <Grid item alignItems="center" container xs={12}>
              {isLoading && (pageCount > 1 && <Pagination />) }
          </Grid>
          
          {isLoading
              ?  (<List>{tasks.map((task: Task) => <ToDoListItem key={task.id} task={task} />)}</List>)
              :   <LinearProgress />}
         
        </Grid>
      </Container>
  );
};