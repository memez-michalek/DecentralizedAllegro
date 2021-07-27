import React from 'react'
import TextField from "@material-ui/core/TextField"


export default function ImageField(props){
    return(
    <TextField
    className={props.className}
    name={props.name}
    type="file"
    />        
    )
}


