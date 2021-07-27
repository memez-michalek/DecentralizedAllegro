import React from 'react';
import {Snackbar} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';

export default function AlertComponent(props){
    
    return(
    <Snackbar
            autoHideDuration={3000}
            onClose={props.CloseSnackbar}
            open={props.open}
            >
                console.log()
              <Alert onClose={props.CloseSnackbar} severity={props.severity}>
                {props.message}
              </Alert>
            </Snackbar>
    )
}