import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Grid } from '@material-ui/core';
import { Input } from '../../components/Input';
import {useDispatch } from 'react-redux';
import { userRegistration } from '../user/userSlice';
import { toggleAuthStatus, SignupInterface } from './authSlice';

export const SignUp = () => {
  const dispatch = useDispatch();

  const initialValues: SignupInterface = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
  }
  return(
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
                firstName: Yup.string().required('Required'),
                lastName: Yup.string().required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string().min(8, 'Must be 8 characters or more').required('Required')})
            }
            onSubmit={(values: SignupInterface, { setSubmitting }) => {
              dispatch(userRegistration(values));
              dispatch(toggleAuthStatus(true))
              setSubmitting(false);
              }}>
            <Form>
              <Input name="firstName" label="First name" />
              <Input name="lastName" label="Last name" />
              <Input name="email" label="Email" />
              <Input name="password" label="Password"  type="password" autoComplete="current-password" />
              <Grid item >
              <Button 
                variant="contained" 
                color="primary"
                type="submit"
                fullWidth 
                >Sign up</Button>
              </Grid>

            </Form>
        </Formik>
    );
};