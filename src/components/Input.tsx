import React from 'react';
import { useField} from 'formik';
import { TextField, Grid  } from '@material-ui/core';

interface Values {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
}

export const Input = (props:Values) => {
  const [field, meta] = useField(props);
    return(
        <Grid item >
        <TextField
          fullWidth
          margin='normal'
          error={(meta.touched && meta.error) ? true : false}
          helperText={(meta.touched && meta.error) && meta.error}
          variant="outlined"
          {...field}
          {...props}
        />
        </Grid>
    )
};
