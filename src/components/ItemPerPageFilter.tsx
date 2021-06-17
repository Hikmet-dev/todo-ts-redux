import React from 'react';
import { Select, MenuItem } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { changeActivePage, changeTaskCount, fetchTask, selectTaskCount } from '../features/task/taskSlice';

export const ItemPerPageFilter = () => {
  const taskCount = useSelector(selectTaskCount);
  const dispatch = useDispatch();
  const changeItemPerPageFilter = (e: React.ChangeEvent<{ value: unknown }>) => { 
      dispatch(changeTaskCount(Number(e.target.value as string)));
      dispatch(changeActivePage(1));
      dispatch(fetchTask());
};

  return(
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={taskCount}
      onChange={e => changeItemPerPageFilter(e)}
    >
      <MenuItem value={5}>5</MenuItem>
      <MenuItem value={10}>10</MenuItem>
      <MenuItem value={20}>20</MenuItem>
    </Select>
  )
}