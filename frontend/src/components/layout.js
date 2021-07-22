import React from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
const drawerWidth = 250

const useStyles = makeStyles({
    page:{
        backgroundColor: "primary",
        width: "100%"
    },
    drawer:{
        width: drawerWidth
    },
    drawerWidth:{
        width: drawerWidth
    },
    root:{
        display: "flex"
    }
})


function layout({children}){
    const classes = useStyles()
    return(
        <div className={classes.root}>

            <Drawer
            classname={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{paper: classes.drawerWidth}}
            >
                <div>
                    <Typography variant="h6">
                        dupa site
                    </Typography>

                </div>
            </Drawer>
            

            <div className={classes.page}>
            {children}
            </div>

        </div>
    )

}
export default layout;