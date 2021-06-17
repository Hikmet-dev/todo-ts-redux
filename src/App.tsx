import React, {  useLayoutEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {ToDoList} from './features/task/ToDoList';
import {Auth} from './features/auth/Auth';
import { instance } from './instance'; 
import { Container, Snackbar } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { NavBar } from './components/NavBar';
import { selectAuthStatus} from './features/auth/authSlice';
import { selectIsLoading } from './features/user/userSlice';
import { closeError, selectErrorStatus, selectErrorStatusCode, selectErrorMesage, } from './features/error/errorSlice';
import {toggleAuthStatus} from './features/auth/authSlice';
import * as jwt from 'jsonwebtoken';

function App() {
  const authStatus = useSelector(selectAuthStatus);
  const isLoading = useSelector(selectIsLoading);
  const errorStatus = useSelector(selectErrorStatus);
  const errorStatusCode = useSelector(selectErrorStatusCode);
  const errorMessage = useSelector(selectErrorMesage);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const token = sessionStorage.getItem('token');
    if(token !== null) {
      const decode = jwt.decode(token.split(' ')[1]);
      if (decode !== null && typeof decode !== 'string'){
       if(Date.now() > decode.exp) dispatch(toggleAuthStatus(true));
      }
     instance.defaults.headers = {'Authorization': sessionStorage.getItem('token')};
    }
  });

  return (
    <Container>
      <NavBar />
      {(authStatus && isLoading) && <ToDoList />}
      {!(authStatus && isLoading) && <Auth />}
      <Snackbar
        open={errorStatus}
        autoHideDuration={6000} 
        onClose={(event, reason) => dispatch(closeError(reason))}>
          <Alert
            severity="error" > 
            <AlertTitle>{`Error ${errorStatusCode}`}</AlertTitle>
            {errorMessage} 
          </Alert>
        </Snackbar>     
    </Container>
  );
};

export default App;