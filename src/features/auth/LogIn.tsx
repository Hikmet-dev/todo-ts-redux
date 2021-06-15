import React from 'react';
import { Formik, Form  } from 'formik';
import * as Yup from 'yup';
import { Button, Grid  } from '@material-ui/core';
import { Input } from '../../components/Input';
import {useDispatch } from 'react-redux'
import { fetchUser } from '../user/userSlice';
import { toggleAuthStatus } from './authSlice';



export const LogIn = () => {
    const dispatch = useDispatch();

    return(
        <Formik 
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string().min(8, 'Must be 8 characters or more').required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                dispatch(fetchUser(values));
                dispatch(toggleAuthStatus(true))
                setSubmitting(false);
            }}>
            <Form>
            <Input name="email" label="Email"   />
            <Input name="password" label="Password" type="password" autoComplete="current-password"   />
            <Grid item>
            <Button 
                variant="contained" 
                color="primary" 
                type="submit"
                fullWidth
                >Log in</Button>
            </Grid>
            </Form>
        </Formik>
    )
};