import React from 'react';
import clsx from "clsx";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import {useState} from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import CallReceivedOutlinedIcon from '@material-ui/icons/CallReceivedOutlined';
import CallMadeOutlinedIcon from '@material-ui/icons/CallMadeOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import ListItemIcon  from "@material-ui/core/ListItemIcon";
import {makeStyles} from '@material-ui/core/styles';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useTheme } from '@material-ui/core';
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
const drawerWidth = 240;
const drawerData = [
    {
        id: 1,
        icon: <CallMadeOutlinedIcon/>,
        caption: "Withdraw"
    },
    {
        id: 2,
        icon: <CallReceivedOutlinedIcon/>,
        caption: "Deposit"
    },
    {
        id: 3,
        icon: <AddOutlinedIcon/>,
        caption: "Add Listing"
    }
];

const styles = makeStyles((theme)=>({
    root:{
        display: 'flex',
    },
    drawer:{
        width: drawerWidth,
        flexShrink: 0,

    },
    drawerOpen:{
        width: drawerWidth,
        transition: theme.transitions.create('width',{
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })
    },
    drawerClose:{
        transition: theme.transitions.create('width',{
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]:{
            width: theme.spacing(9) + 1,
        }

    },
    appBar:{
        ZIndex: theme.zIndex.drawer +1,
        transition: theme.transitions.create(["width", "margin"],{
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })

    },
    appBarShift:{
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`, 
        transition: theme.transitions.create(["width", "margin"],{
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })
    },
    menuButton:{
        margin: 30,
    },
    hide:{
        display: 'none',
    },
    toolbar:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content:{
        flexGrow: 1,
        padding: theme.spacing(3)
    }


}));




function Layout(){
    const classes = styles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleOpenDrawer = () =>{
        setOpen(true);
    }
    const handleCloseDrawer = () =>{
        setOpen(false);
    }
    
    return(
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
            >
                <Toolbar>
                    <IconButton
                    color="primary"
                    aria-label="open drawer"
                    onClick={handleOpenDrawer}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                    })}
                    >
                        <MenuOutlinedIcon/>
                    </IconButton>
                </Toolbar>

            </AppBar>
            <Drawer
            variant="permanent"
            className={clsx(classes.drawer,{
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleCloseDrawer}>
                        {theme.direction==="rtl"? <ChevronRightOutlinedIcon/>: <ChevronLeftOutlinedIcon/>}
                    </IconButton>
                </div>
            <Divider/>
                <List>
                    {drawerData.map(item=>(
                        <ListItem>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <Typography>{item.caption}</Typography>

                        </ListItem>
                    ))}


                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}></div>
            </main>


        </div>
    )

}

export default Layout;
