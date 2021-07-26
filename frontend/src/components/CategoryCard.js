import React from 'react';
import {makeStyles, Card} from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import pic from "./jd.jpg"
const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%"
    },
    cardMedia: {
        height: 140
    }

}))



export default function CategoryCard(data){
    const classes = useStyles();


    return(
        
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.cardMedia}
                title="jd"
                //image={data.image}
                //src={pic}
                />
                <CardContent>
                    <Typography
                    variant="h5"
                    color="primaryText"
                    >
                        Dupy
                        {/*data.title*/}
                    </Typography>
                    <Typography
                    variant="p"
                    color="secondaryText"
                    >
                        {/*data.description*/}
                    Hic magni sequi dolorum deleniti repellendus saepe est. 
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        
    )
}