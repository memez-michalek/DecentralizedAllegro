import React from "react";
import {makeStyles} from "@material-ui/core";
import loadable from '@loadable/component'
import {useHistory} from "react-router-dom"
import IconButton from "@material-ui/core/IconButton"
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import Typography from '@material-ui/core/Typography'

import CheckIfSessionCookieExists from "../components/CheckIfSessionCookieExists"

//const CheckIfSessionCookieExists = loadable(()=> import("./components/CheckIfSessionCookieExists"))



export default function ProfileSite(){
    const classes = makeStyles();
    let history = useHistory();
    const login = CheckIfSessionCookieExists()
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