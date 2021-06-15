import React from 'react';
import { useField } from 'formik';
import { TextField, Grid  } from '@material-ui/core';



export const Input: any = ({ ...props }: any) => {
    const [field, meta]: any = useField(props);
    return(
        <Grid item >
        <TextField
          fullWidth
          margin='normal'
          error={(meta.touched && meta.error) && true}
          helperText={(meta.touched && meta.error) && meta.error}
          variant="outlined"
          {...field}
          {...props}
        />
        </Grid>
    )
};
