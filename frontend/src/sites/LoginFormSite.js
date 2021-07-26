import React from "react";
import FoomControl from "@material-ui/core/FormControl"
import {makeStyles} from "@material-ui/core"
import {useState, useEffect} from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme)=>({
    root:{
            
    },
    form:{
        display: "inline-block",
        marginTop: theme.spacing(3),
        marginLeft: "40%", 
    },

}))

export default function LoginFormSite(){
    const classes = useStyles();
    const [username, changeUsername] = useState("")
    const [email, changeEmail] = useState("")
    const [password, changePassword] = useState("")
    const [passwordVisibility, changePasswordVisibility] = useState(false)
   
    const onChange = (e) =>{
        e.preventDefault();
        
        switch(e.target.id){
            case "username":
                changeUsername(e.target.value);
                break
            case "email":
                changeUsername(e.target.value);
                break
            case "password":
                changeUsername(e.target.value);
                break
            default: 
                break
        }
    }
    const onSubmit = async() =>{
        //TODO ADD NOTIFICATIONS 
        const passswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        if (email === ""){
            console.log("empty email")
        }else if(password === "" || password.match(passswordRegex)){
            console.log("empty or poor password")
        }else if(username === ""){
            console.log("empty username")
        }

        //TODO ADD DATA TRANSITION TO BACKEND
    }
    const setPasswordVisible = () =>{
        changePasswordVisibility(true)
    }
    const setPasswordInvisible = () =>{
        changePasswordVisibility(false)
    }
    console.log(passwordVisibility)
    return(
        <div className={classes.root}>
            <Typography variant="h2">
                Login Page
            </Typography>
            <form noValidate autoComplete="off" method="post">
                <TextField className={classes.form} type="text" id="username" label="Username" onChange={onChange}/>
                <TextField className={classes.form} type="email" id="email" label="E-mail" onChange={onChange}/>
                <TextField className={classes.form} type={passwordVisibility === true? "text" : "password"} id="password" label="Password" visible={passwordVisibility} onChange={onChange}/>
                <IconButton  onClick={passwordVisibility===true ? setPasswordInvisible: setPasswordVisible}>
                    {passwordVisibility===true ? <VisibilityOffOutlinedIcon/> : <VisibilityOutlinedIcon/>}
                </IconButton>
                <Button
                variant="outlined"
                color="secondary"
                onSubmit={onSubmit}
                className={classes.form}
                //TODO ADD HCAPTCHA
                >Register!</Button>
            </form>
        </div>
    )
}
