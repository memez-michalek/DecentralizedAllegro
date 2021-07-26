import React from 'react';
import {makeStyles} from "@material-ui/core"
import {Snackbar} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import {useState} from "react";
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
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