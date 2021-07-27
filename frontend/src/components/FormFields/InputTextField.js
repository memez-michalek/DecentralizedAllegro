import React from 'react';
import {makeStyles} from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
export default function InputTextField(props){
    return(
        <TextField 
        className={props.className}
        type={props.type}
        id={props.id}
        label={props.label}
        onChange={props.onChange}
        name={props.name}
        />
    )
}