import React from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccessibilityNewOutlinedIcon from '@material-ui/icons/AccessibilityNewOutlined';
import { SubjectOutlined } from '@material-ui/icons';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import {useHistory, useLocation} from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import {Toolbar} from "@material-ui/core";
import {format } from "date-fns"
import Avatar from "@material-ui/core/Avatar";
const drawerWidth = 200

const useStyles = makeStyles((theme)=>{
    return{
    page:{
        backgroundColor: "primary",
        width: "100%",
        padding: theme.spacing(3)
    },
    drawer:{
        width: drawerWidth
    },
    drawerWidth:{
        width: drawerWidth
    },
    root:{
        display: "flex"
    },
    active:{
        background: "#4ee8b2"
    },
    title:{
        fontSize: 36,
        marginTop: theme.spacing(2.5),
        marginBottom: theme.spacing(2.5),
        color: "white",
        background: "black",
        padding: theme.spacing(2.5)
    },
    bar:{
        width: `calc(100% - ${drawerWidth}px)`
    },
    toolbar: theme.mixins.toolbar,
    date:{
        flexGrow: 1
    } , 
    avatar:{
        marginLeft: theme.spacing(2)
    } 

}
})



function LayoutComponent({children}){
    const history = useHistory();
    const classes = useStyles()
    const location = useLocation();
    const menuItems = [
        {
            title: 'form',
            icon: <SubjectOutlined color="secondary"/>,
            path: "/form"
        },
        {
            title: 'mainsite',
            icon: <AccessibilityNewOutlinedIcon color="secondary"/>,
            path: "/"
        },
        {
            title: 'users',
            icon: <GroupOutlinedIcon color="secondary"/>,
            path: "/users"
        }
    ]


    return(
        <div className={classes.root}>
            <AppBar
            className={classes.bar}
            elevation={0}
            >
                <Toolbar>
                    <Typography className={classes.date}>
                        Today {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        Twoj Stary
                    </Typography>
                    <Avatar classname={classes.avatar} src="../public/twojstary.jpeg"/>
                </Toolbar>
            </AppBar>
            
            <Drawer
            classname={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{paper: classes.drawerWidth}}
            >
                <div>
                    <Typography variant="h6" className={classes.title}>
                        dupa site
                    </Typography>

                </div>
            <List>
                {menuItems.map(item=>(
                    <ListItem
                        button
                        onClick={()=>history.push(item.path)}
                        className={location.pathname === item.path? classes.active: null}
                   >
                        <ListItemText>{item.title}</ListItemText>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                    </ListItem>
                ))}

            </List>
            
            </Drawer>
            

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>

        </div>
    )

}
export default LayoutComponent;