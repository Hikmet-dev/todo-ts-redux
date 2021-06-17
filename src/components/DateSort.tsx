import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import {selectOrder, selectOrderValue, changeOrder} from '../features/filter/filterSlice';
import { fetchTask } from '../features/task/taskSlice';

export const DateSort = () =>  {
  const order = useSelector(selectOrder);
  const orderValue = useSelector(selectOrderValue);
  const dispatch = useDispatch();

    return(<>
    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
      {orderValue
          .map(item => 
          <Button 
            key={item}
            size="medium"
            variant={ order === item ? "contained" : undefined}
            onClick={e => {dispatch(changeOrder(e.currentTarget.value)); dispatch(fetchTask())}}
            value={item}
            >{item}</Button>)}
    </ButtonGroup>  
      </>
    )
}