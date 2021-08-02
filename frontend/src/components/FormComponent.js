import React from 'react';
import {makeStyles} from '@material-ui/core'
import {useState} from "react"
import loadable from '@loadable/component'
import IconButton from "@material-ui/core/IconButton"
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom"
import TextField from '@material-ui/core/TextField'
import CheckIfSessionCookieExists from "./CheckIfSessionCookieExists"
//import FormControl from "@material-ui/core/FormControl"
import deposit from "./helpers/deposit"
import withdraw from "./helpers/withdraw"

const InputTextField = loadable(()=> import("./FormFields/InputTextField"))
const ImageField = loadable(()=> import("./FormFields/ImageField"))

const styles = makeStyles((theme) =>({
    root:{

    },
    form:{
        display: "block",
        marginTop: theme.spacing(3),
        marginLeft: "40%", 
    },

}))


export default function FormComponent(props){
    const classes = styles()
    const isLoggedIn = CheckIfSessionCookieExists();
    let passwordFieldState = { true : "text", false: "password"}
    const [passwordVisibility, changePasswordVisibility] = useState(false);
    const [email, changeEmail] = useState("");
    const [username, changeUsername] = useState("");
    const [password, changePassword] = useState("");
    const [depositAmount, changeDepositAmount] = useState("");
    const [withdrawAmount, changeWithdrawAmount] = useState("");
    const history = useHistory();

    const onChange = (e) =>{
        e.preventDefault();
        console.log(e.target.name)
        switch(e.target.name){
            case "email":
                changeEmail(e.target.value)
                break
            case "username":
                changeUsername(e.target.value)
                break
            case "password":
                changePassword(e.target.value)
                break
            case "deposit":
                changeDepositAmount(e.target.value)
                break
            case "withdraw":
                changeWithdrawAmount(e.target.value)
                break
            default:
                break
        }
    }
    
    function onSubmit(e){
        e.preventDefault()
        switch(e.target.name){
            case "login-register":
                const passwordRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
                if (email === ""){
                    console.log("empty email")
                }else if(password === "" || password.match(passwordRegex)){
                    console.log("empty or poor password")
                }else if(username === ""){
                    console.log("empty username")
                }
                console.log(username)
                return(
                    <div>{history.push("/")}</div>
                )
            case "deposit":
                deposit(depositAmount).then(function(value){
                    console.log(value)
                    if (value){
                        
                        return(
                            <div>jd</div>
                        )
                    }else{
                        return(
                        <div>Error occurred try again</div>
                        )
                    }
                })
                break
            case "withdraw":
                withdraw(withdrawAmount).then(function(value){
                    console.log(value)
                })
                break
            default:
                break
        }
    }
    if (!isLoggedIn){
        switch(props.version){
            case "login":
                return(
                <div className={classes.root}>
                <form method="post" onSubmit={onSubmit} name="login">
                    <InputTextField className={classes.form} type="text" id="username-login" label="username" name="username" onChange={onChange}></InputTextField>
                    <InputTextField className={classes.form} type="email" id="email-login" label="email" name="email" onChange={onChange}></InputTextField>
                    <InputTextField className={classes.form} type={passwordFieldState[passwordVisibility]} id="password-login" label="password" name="password" onChange={onChange}></InputTextField>
                    <IconButton onClick={()=>passwordVisibility===false ? changePasswordVisibility(true) : changePasswordVisibility(false)}>
                    {passwordVisibility===true ? <VisibilityOffOutlinedIcon/> : <VisibilityOutlinedIcon/>}
                    </IconButton>
                    <Button className={classes.form} type="submit" variant="outlined" color="primary">Log In</Button>             
                </form>
                </div>
                )   
            case "register":
                return(
                <div className={classes.root}>
                <form method="post" onSubmit={onSubmit} name="login">
                    <InputTextField className={classes.form} type="text" id="username-login" label="username" name="username" onChange={onChange}></InputTextField>
                    <InputTextField className={classes.form} type="email" id="email-login" label="email" name="email" onChange={onChange}></InputTextField>
                    <InputTextField className={classes.form} type={passwordFieldState[passwordVisibility]} id="password-login" label="password" name="password" onChange={onChange}></InputTextField>
                    <IconButton onClick={()=>passwordVisibility===false ? changePasswordVisibility(true) : changePasswordVisibility(false)}>
                    {passwordVisibility===true ? <VisibilityOffOutlinedIcon/> : <VisibilityOutlinedIcon/>}
                    </IconButton>
                    <Button className={classes.form} type="submit" variant="outlined" color="primary">Log In</Button>             
                </form>
                </div>
                ) 
           default:
                break
        }
    }else{
        switch(props.version){
            case "addListing":
                return(
                <div>
                    <form method="post" onSubmit={onSubmit} name="image">
                        <ImageField className={classes.form} name="image"></ImageField>
                    </form>
                </div>
                )
            case "deposit":
                return(
                    <div>
                    <form onSubmit={onSubmit} name="deposit" method="post" action={"/confirmation"}>
                        <InputTextField className={classes.form} type="number" label="deposit" name="deposit" id="deposit" onChange={onChange}/>
                        <Button color="primary" type="submit" className={classes.form} variant="outlined">Deposit</Button>
                    </form>
                    </div>
                )
            case "withdraw":
                return(
                    <div>
                        <form onSubmit={onSubmit} name="withdraw" method="post" action={"/confirmation"}>
                            <InputTextField className={classes.form} type="number" label="withdraw" name="withdraw" id="withdraw" onChange={onChange}/>
                            <Button color="primary" type="submit" className={classes.form} variant="outlined">Withdraw</Button>
                        </form>
                    </div>
                )
            default:
                break
        }
        return(
            <div>
                {history.push("/")}
            </div>
        )
    }
}

