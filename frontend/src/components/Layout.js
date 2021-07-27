import React from 'react';
import clsx from "clsx";

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
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Avatar from '@material-ui/core/Avatar';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import CheckIfSessionCookieExists from "../components/CheckIfSessionCookieExists"



import BalanceComponent from '../components/BalanceComponent'

const drawerWidth = 240;
const drawerData = [
    {
        id: 1,
        icon: <CallMadeOutlinedIcon/>,
        caption: "Withdraw",
        location: "/withdraw"
    },
    {
        id: 2,
        icon: <CallReceivedOutlinedIcon/>,
        caption: "Deposit",
        location: "/deposit"
    },
    {
        id: 3,
        icon: <AddOutlinedIcon/>,
        caption: "Add Listing",
        location: "/add"
    },
    {
        id:4,
        icon: <QuestionAnswerOutlinedIcon/>,
        caption: "FAQ",
        location: "/faq"
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    appbarItems:{
        display: 'none',
        [theme.breakpoints.up('md')]:{
            display: 'flex'
        }
    },
    logo:{
      marginLeft: "40%",
      
    },
    rightAlignment:{
      marginRight: theme.spacing(1),
      marginLeft: "auto",
    },
    Sitetoolbar: theme.mixins.toolbar,
    page:{
      width: "100%",
      padding: theme.spacing(3)
    }

  }));
  


function Layout({children}){
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const isLoggedIn = CheckIfSessionCookieExists()
    
    const handleOpenDrawer = () =>{
        setOpen(true);
    }
    const handleCloseDrawer = () =>{
        setOpen(false);
    }
    const showNotifications= () =>{
        console.log("notifications")
    }
    const handleBasketClick = () =>{
      return(
      <div></div>
      );
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
                    aria-label="open drawer"
                    onClick={handleOpenDrawer}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                    })}
                    >
                        <MenuOutlinedIcon
                        color="secondary"
                        />
                    </IconButton>
                    
                    {isLoggedIn ? <BalanceComponent/> : <div></div>}
                    <IconButton
                    href={"/"}
                    aria-label="logo"
                    className={classes.logo}
                    disableRipple
                    
                    >
                    <Typography
                    variant="h5"
                    
                    color='secondary'
                    >Decentralized Market</Typography>
                    </IconButton>
                    <IconButton
                      className={classes.rightAlignment}
                      onClick={handleBasketClick}
                      aria-label="show basket contents"
                    >
                      <ShoppingCartOutlinedIcon
                      color="secondary"></ShoppingCartOutlinedIcon>
                    </IconButton>
                    <IconButton
                        //TODO ADD SHOPPING CART FUNCTIONALITY
                        aria-label="show notifications"
                        onClick={showNotifications}
                        
                    >   
                        <NotificationsNoneOutlinedIcon
                        color="secondary"
                        //TODO ADD FUNCTIONALITY
                        ></NotificationsNoneOutlinedIcon>
                    </IconButton>
                    <IconButton
                    aria-label="avatar button"
                    href={"/profile"}
                    //TODO ADD FUNCTIONALITY
                    >
                      <Avatar src=""></Avatar>

                    </IconButton>
                    

                </Toolbar>

            </AppBar>
            <Drawer
            variant="permanent"
            className={clsx(classes.drawer,{
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
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
                            <IconButton
                            href={item.location}
                            >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <Typography>{item.caption}</Typography>
                            </IconButton>
                        </ListItem>
                    ))}


                </List>
            </Drawer>
            <div className={classes.page}>
              <div className={classes.Sitetoolbar}></div>
              {children}
            </div>


        </div>
    )

}

export default Layout;
