//TODO ADD FUNCTIONALITY

import React from 'react';
import {makeStyles} from "@material-ui/core";
import {useState} from "react"
import {useHistory} from "react-router-dom"
import CheckIfSessionCookieExists from "../components/CheckIfSessionCookieExists"
import TextField from "@material-ui/core/TextField"

import FormComponent from "../components/FormComponent"
/*
const styles = makeStyles((theme) =>({
    root: {

    }
}))

export default function AddListing(){
    const classes = styles();
    const [title, changeTitle] = useState();
    const [description, changeDescription] = useState();
    const [images, changeImages] = useState([]);
    const isLoggedIn = CheckIfSessionCookieExists();
    const history = useHistory();

    const onChange = (e) =>{
        e.preventDefault();
        switch (e.target){
            case "title":
                changeTitle(e.target.value)
                break
            case "description":
                changeDescription(e.target.value)
                break
            case "images":
                changeImages(e.target.value)
                break
            default:
                break
        }
    }
    const onSubmit = (e) =>{
        e.preventDefault()

        if (title === ''){
            alert("title must not be empty")
        }else if(description === ''){
            alert("descripton must not be empty")
        }else if(images === ''){
            alert("images should be provided")
        }
        //TODO SUBMIT DATA

    }


//TODO ADD LISTINGS

   if(isLoggedIn) {
    return(
        <div>
            <form className={classes.root}>
                
                <TextField
                name="title"
                color="primary"
                label="title"
                />
            </form>
        </div>
    )
   }else{}

}
*/
export default function AddListing(){
    return(
        <FormComponent version="addListing"></FormComponent>
    )
}