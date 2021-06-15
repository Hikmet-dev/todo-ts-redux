import React, {  useState,  useLayoutEffect} from  'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Grid, List, CircularProgress} from '@material-ui/core';
import { CreateToDo }  from '../../components/CreateToDo';
import { Pagination } from '../../components/Pagination';
import { ToDoListItem } from './ToDoListItem';
import { FilterPanel } from '../filter/FilterPanel';
import {selectOrder, selectFilterBy} from '../filter/filterSlice';
import { fetchTask, selectTasks, selectIsLoading, selectPageCount } from './taskSlice';



export const ToDoList = () => {
  const [activePage, setActivePage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);
  const order = useSelector(selectOrder);
  const filterBy = useSelector(selectFilterBy);
  const tasks = useSelector(selectTasks);
  const isLoading = useSelector(selectIsLoading);
  const pageCount = useSelector(selectPageCount);
  const dispatch =useDispatch()


  
  useLayoutEffect(() => {
    if(sessionStorage.token) {
      dispatch(fetchTask({
        order,
        filterBy,
        activePage,
        itemPerPage
      }))
    }
  }, [order, filterBy, activePage, itemPerPage]);


  const clickOnPage = (e: any) => {
    setActivePage(Number(e.currentTarget.value));
  };

  const changeItemPerPageFilter = (e: any) => {
      setItemPerPage(e.target.value)
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
              {isLoading && (pageCount > 1 && <Pagination onPageNow={clickOnPage} activePage={activePage} />) }
          </Grid>
          <List>
      {isLoading
              ?  (tasks.map(task => <ToDoListItem key={task.id} task={task} />)) 
              :   <CircularProgress />}
          </List>
        </Grid>
      </Container>
  );
};