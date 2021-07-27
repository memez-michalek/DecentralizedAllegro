import React from 'react';
import {makeStyles} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';

const useStyles = makeStyles((theme)=>({
    
    image:{
        height: 140
    },
    root:{
        marginTop: theme.spacing(4),
        width: "100%"
    }
}))
function onclick(){
    console.log("clicked jd")
}

export default function ItemCard(data){
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.image}
                //src={data.image}
                src={Image}
                title="image"
                />
                <CardContent>
                    <Typography
                    variant="h4"
                    color="primaryText"
                    >
                        {/*data.title*/}
                        Sample Title
                    </Typography>
                    <Typography
                    variant="h6"
                    color="primaryText"
                    >
                        Quas hic ipsam aut atque. Facere cumque ut distinctio quis alias est et minus. Inventore amet mollitia itaque. Corrupti nemo nihil itaque. Consequuntur voluptatum libero fugit eligendi ut harum maiores.
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<AddShoppingCartOutlinedIcon/>}
                    >
                        Add to the basket
                    </Button>
                    <Button
                    variant="outlined"
                    color="secondary"
                    onClick={onclick}
                    startIcon={<MonetizationOnOutlinedIcon/>}

                    >
                        
                        Buy now!
                    </Button>
                </CardActions>
            
        </Card>
    )
}