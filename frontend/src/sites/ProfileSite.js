import React from "react";
import {makeStyles} from "@material-ui/core";
import Cookie from "universal-cookie";
import {useHistory} from "react-router-dom"
import {useEffect} from "react"
import IconButton from "@material-ui/core/IconButton"
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import Typography from '@material-ui/core/Typography'
const styles = makeStyles((theme)=>({
    root:{
        display: "block"
    }
}))
function checkLogin(){
    const cookie = new Cookie();
        console.log(cookie.get("token"))
        if (cookie.get("token") !== undefined){
            return true;
        }else{
            return false;
        }
}




export default function ProfileSite(){
    const classes = makeStyles();
    let history = useHistory();
    const login = checkLogin();
    const pushToLogin = (history) =>{
        history.push("/login");
    }
    

    if(login){
        return(
            <div>
                twoj stary
            </div>
        )
    }else{
        //TODO FIX TRANSITION EXCEPTIONS
        return(
        <div className={classes.root}>
            <Typography
            variant="h2"
            color="primary"
            >
                Please Log in first
            </Typography>
            <IconButton
            startIcon={ExitToAppOutlinedIcon}
            onClick={pushToLogin(history)}
            >
                Log In
            </IconButton>

        </div>
        )
    }
//TODO ADD FUNCTIONALITY
}