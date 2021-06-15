import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useSelector } from 'react-redux';
import { selectPageCount } from '../features/task/taskSlice';




export const  Pagination = ({onPageNow, activePage}: any) =>  {
    const pageCount = useSelector(selectPageCount);
    const pageArr = new Array(pageCount).fill(1).map((e, i) => i + 1);
    return (
        <ButtonGroup  color="primary" aria-label="contained button group">            
            <Button onClick={onPageNow} value="1"><ArrowBackIcon /></Button>
                {pageArr.map(page => <Button key={`item-${page}`} onClick={onPageNow} value={page} variant={ activePage === page ?  'contained' : undefined}>{page}</Button>)}
            <Button onClick={onPageNow} value={pageArr.length}><ArrowForwardIcon /> </Button>
        </ButtonGroup>
    );
};