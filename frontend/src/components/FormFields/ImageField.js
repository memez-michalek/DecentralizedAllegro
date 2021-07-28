import React from 'react'
import TextField from "@material-ui/core/TextField"

//TODO ADD IMAGE FIELD
export default function ImageField(props){
    return(
    <TextField
    className={props.className}
    name={props.name}
    type="file"
    />        
    
    )
}


