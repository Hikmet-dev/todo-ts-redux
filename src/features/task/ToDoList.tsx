import React, {  useState,  useEffect, useCallback} from  'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Grid, List, LinearProgress} from '@material-ui/core';
import { CreateToDo }  from '../../components/CreateToDo';
import { Pagination } from '../../components/Pagination';
import { ToDoListItem } from './ToDoListItem';
import { FilterPanel } from '../filter/FilterPanel';
import {selectOrder, selectFilterBy} from '../filter/filterSlice';
import { selectTasks, selectIsLoading, selectPageCount, selectActivePage, Task, Tasks, changeActivePage, addTasks, changeLoadStatus } from './taskSlice';
import { instance } from '../../instance';


export const ToDoList = () => {
  const [itemPerPage, setItemPerPage] = useState(5);
  const order = useSelector(selectOrder);
  const filterBy = useSelector(selectFilterBy);
  const tasks = useSelector(selectTasks);
  const isLoading = useSelector(selectIsLoading);
  const pageCount = useSelector(selectPageCount);
  const activePage = useSelector(selectActivePage);
  const dispatch =useDispatch()

  const getTodoList = useCallback( async () => {
    if(sessionStorage.token) {
      const res = await instance.get<Tasks>('tasks', {params: {
        order: order,
        filterBy: filterBy,
        page: activePage,
        taskCount: itemPerPage
      }});
      await dispatch(addTasks(res.data));
      dispatch(changeLoadStatus(true));
    }
  }, [dispatch,  order, filterBy, activePage, itemPerPage])


  useEffect(() => {
    getTodoList()
  }, [getTodoList]);


  const changeItemPerPageFilter = (e: React.ChangeEvent<HTMLSelectElement>) => { 
      setItemPerPage(Number(e.target.value));
      dispatch(changeActivePage(1));
  };

  const handleNewToDo = async (e: React.KeyboardEvent<HTMLDivElement> | 
    React.ChangeEvent<HTMLInputElement>) => {
        const {key} = (e as React.KeyboardEvent<HTMLDivElement>);
        const {target} = (e as React.ChangeEvent<HTMLInputElement>);
        if (key === "Enter" && target.value.trim()) {
            await instance.post('task', {name: target.value, done: false});
            target.value = '';
            await getTodoList();
          }
  };
  
  return(
      <Container maxWidth="md">
        <Grid>
        <Grid>
          <CreateToDo handleNewToDo={handleNewToDo} />
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