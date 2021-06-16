import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { instance } from './instance';
import { createError } from './features/error/errorSlice';
import { logOut } from './features/auth/authSlice';

instance.interceptors.request.use(request => {
  return request;
}, error =>{
  return Promise.reject(error);
});

instance.interceptors.response.use(undefined, (error) =>  {
  if([422, 404, 400].includes(error.response?.status)){
    store.dispatch(createError (error.response.data));
    if(error.response.data.message === 'Invalid token') store.dispatch(logOut());
    console.log(`interceptors:`, error.response.data);
  } 
  return Promise.reject(error);
});

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();