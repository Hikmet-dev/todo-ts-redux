import React, {  useState,  useEffect} from  'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Grid, List, LinearProgress} from '@material-ui/core';
import { CreateToDo }  from '../../components/CreateToDo';
import { Pagination } from '../../components/Pagination';
import { ToDoListItem } from './ToDoListItem';
import { FilterPanel } from '../filter/FilterPanel';
import {selectOrder, selectFilterBy} from '../filter/filterSlice';
import { fetchTask, selectTasks, selectIsLoading, selectPageCount, selectChangeElement, selectActivePage, Task, changeActivePage } from './taskSlice';


export const ToDoList = () => {
  const [itemPerPage, setItemPerPage] = useState(5);
  const order = useSelector(selectOrder);
  const filterBy = useSelector(selectFilterBy);
  const tasks = useSelector(selectTasks);
  const isLoading = useSelector(selectIsLoading);
  const pageCount = useSelector(selectPageCount);
  const changeElement = useSelector(selectChangeElement);
  const activePage = useSelector(selectActivePage);
  const dispatch =useDispatch()

  useEffect(() => {
    if(sessionStorage.token) {
      dispatch(fetchTask({
        order,
        filterBy,
        activePage,
        itemPerPage
      }))
    }
  }, [dispatch, changeElement, activePage, order, filterBy, itemPerPage]);


  const changeItemPerPageFilter = (e: any) => {
      setItemPerPage(e.target.value);
      dispatch(changeActivePage(1))
  };

  return(
      <Container maxWidth="md">
        <Grid>
        <Grid>
          <CreateToDo />
          </Grid>
          <FilterPanel  
              onChangeItemFilter={changeItemPerPageFilter}
              itemPerPage={itemPerPage} />
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