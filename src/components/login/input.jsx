import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
// import Alert from '@material-ui/lab/Alert';

const Input = ({label, type}) => {
    return ( 
        <FormControl fullWidth variant="outlined">
            <TextField
            variant="outlined"
            size="small"
            label={label}
            type={type}
            >
            </TextField>
            {/* {error && 
            <Alter variant="outlined" severity="error">
                {error}
            </Alter>
            } */}
        </FormControl>
     );
}
 
export default Input;