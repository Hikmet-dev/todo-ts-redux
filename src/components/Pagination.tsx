import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useSelector, useDispatch } from 'react-redux';
import { changeActivePage, selectPageCount, selectPage, fetchTask } from '../features/task/taskSlice';

export const  Pagination = () =>  {
    const dispatch = useDispatch();
    const activePage = useSelector(selectPage);
    const pageCount = useSelector(selectPageCount);
    const pageArr = new Array(pageCount).fill(1).map((e, i) => i + 1);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (typeof e.currentTarget.value === 'string') {
            dispatch(changeActivePage(Number(e.currentTarget.value)));
            dispatch(fetchTask());
        }
    };
    return (
        <ButtonGroup
            color="primary" 
            aria-label="contained button group">            
            <Button 
                onClick={e => handleClick(e)} 
                value={1}
                ><ArrowBackIcon /></Button>
                {pageArr.map(page => 
                                <Button 
                                    key={`item-${page}`} 
                                    onClick={e => handleClick(e)}
                                    value={page}
                                    variant={ activePage === page ? 'contained' : undefined}
                                    >{page}</Button>)}
            <Button
            onClick={e => handleClick(e)} 
            value={pageArr.length}
            ><ArrowForwardIcon /></Button>
        </ButtonGroup>
    );
};