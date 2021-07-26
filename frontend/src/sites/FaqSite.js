import React from "react";
import {makeStyles} from "@material-ui/core"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


const useStyles = makeStyles((theme) =>({
    root:{
        width: '100%',
    },
    accordion:{
        marginTop: theme.spacing(2)
    }
}))

export default function FaqSite(data){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <Typography
                variant="h3"
                color="text-primary"
                className={classes.title}
                >
                FAQ
                </Typography>
            </div>
            
            
            <Accordion className={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreOutlinedIcon />}
                    aria-controls="panel1"
                >
                    <Typography>
                        What is decentralized Market?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                    color="textSecondary"
                    >
                        jdjdjdjd
                    </Typography>
                </AccordionDetails>            
            </Accordion>
            <Accordion className={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreOutlinedIcon />}
                    aria-controls="panel1"
                >
                    <Typography>
                        What is decentralized Market?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                    color="textSecondary"
                    >
                        jdjdjdjd
                    </Typography>
                </AccordionDetails>            
            </Accordion>
            
        </div>
    )
}
