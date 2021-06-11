import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import {NavBar} from './components/NavBar';
import {selectLoginForm, selectAuthStatus} from './features/auth/authSlice';
import { LogIn } from './features/auth/LogIn';
import { SignUp } from './features/auth/SignUp';


export const App: any = () =>  {
  const authStatus = useSelector(selectAuthStatus);
  const loginForm = useSelector(selectLoginForm);
  return (
  <Container>
    <NavBar />
    { !authStatus && (loginForm ? <LogIn /> : <SignUp />)}
  </Container>
  )
};

export default App;
