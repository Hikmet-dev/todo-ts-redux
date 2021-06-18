import React, { useEffect } from  'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Grid, List, LinearProgress} from '@material-ui/core';
import { CreateToDo }  from '../../components/CreateToDo';
import { Pagination } from '../../components/Pagination';
import { ToDoListItem } from './ToDoListItem';
import { FilterPanel } from '../filter/FilterPanel';
import { selectTasks, selectIsLoading, selectPageCount, Task, fetchTask, updateTasksList } from './taskSlice';
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';


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

  const handleDragEnd = (result: DropResult) => {
    if(!result.destination) return;
    const items = Array.from(tasks);
    const [reorderingItem] = items.splice(result.source.index, 1); 
    items.splice(result.destination!.index, 0, reorderingItem)
    dispatch(updateTasksList(items));
  };

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
              ?  (<DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="characters">
                          {(provided) => (
                          <List className='characters' {...provided.droppableProps} innerRef={provided.innerRef}>
                          {tasks.map((task: Task, index: number) => 
                            (<Draggable key={task.id} draggableId={task.id} index={index}>
                              {(provided) => (
                                <ToDoListItem  task={task} provided={provided} />
                              )}
                            </Draggable>))}
                            {provided.placeholder}
                          </List>
                          )}
                    </Droppable>
                    </DragDropContext>)
              :   <LinearProgress />}
         
        </Grid>
      </Container>
  );
};