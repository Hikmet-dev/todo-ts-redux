import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useSelector, useDispatch } from 'react-redux';
import { changeActivePage, selectPageCount, selectActivePage } from '../features/task/taskSlice';




export const  Pagination = () =>  {
    const dispatch = useDispatch();
    const activePage = useSelector(selectActivePage);
    const pageCount = useSelector(selectPageCount);
    const pageArr = new Array(pageCount).fill(1).map((e, i) => i + 1);
    return (
        <ButtonGroup
            color="primary" 
            aria-label="contained button group">            
            <Button 
                onClick={e => dispatch(changeActivePage(Number((e.target as HTMLButtonElement).value)))} 
                value={1}
                ><ArrowBackIcon /></Button>
                {pageArr.map(page => 
                                <Button 
                                    key={`item-${page}`} 
                                    onClick={e => dispatch(changeActivePage(Number((e.target as HTMLButtonElement).value)))}
                                    value={page}
                                    variant={ activePage === page ? 'contained' : undefined}
                                    >{page}</Button>)}
            <Button
            onClick={e => dispatch(changeActivePage(Number((e.target as HTMLButtonElement).value)))} 
            value={pageArr.length}
            ><ArrowForwardIcon /></Button>
        </ButtonGroup>
    );
};