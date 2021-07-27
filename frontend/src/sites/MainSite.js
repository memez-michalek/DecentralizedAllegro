import React from 'react';
import loadable from '@loadable/component'
import {makeStyles} from '@material-ui/core'
import {useState} from 'react';
import Masonry from 'react-masonry-css';
import Typography from '@material-ui/core/Typography'
/*
const CategoryCard = loadable(()=> import("./components/CategoryCard"))
const ItemCard = loadable(()=> import("./components/ItemCard"))
*/
import CategoryCard from "../components/CategoryCard"
import ItemCard from "../components/ItemCard"


const useStyles = makeStyles((theme)=>({
    root:{
        marginLeft: theme.spacing(3),
        display: 'flex',
        marginTop: theme.spacing(2)
    },
    offers:{
        marginTop: theme.spacing(2)
    }
    

}))
const breakpointsCategory = {
    default: 6,
    1100: 4,
    700: 3,
}
const breakpointsOffers = {
    default: 1,
}

const sampleData = [
    {
        id: 1,
        title: "title",
        description: "description",
        image: "image location",
    },
    {
        id: 2,
        title: "title",
        description: "description",
        image: "image location",
    },
    {
        id: 3,
        title: "title",
        description: "description",
        image: "image location",
    },
    {
        id: 4,
        title: "title",
        description: "description",
        image: "image location",
    },
    {
        id: 5,
        title: "title",
        description: "description",
        image: "image location",
    },
    {
        id: 6,
        title: "title",
        description: "description",
        image: "image location",
    },
    {
        id: 7,
        title: "title",
        description: "description",
        image: "image location",
    },{
        id: 8,
        title: "title",
        description: "description",
        image: "image location",
    },
    {
        id: 9,
        title: "title",
        description: "description",
        image: "image location",
    },
    {
        id: 10,
        title: "title",
        description: "description",
        image: "image location",
    },
    {
        id: 11,
        title: "title",
        description: "description",
        image: "image location",
    },
    {
        id: 12,
        title: "title",
        description: "description",
        image: "image location",
    },
]

const sampleOffers = [
    {
        id: 1,
        title: "jd",
        description: "jd",
        image: "jd"
    },
    {
        id: 1,
        title: "jd",
        description: "jd",
        image: "jd"
    },
    {
        id: 1,
        title: "jd",
        description: "jd",
        image: "jd"
    }
]



function MainSite(){
    const classes = useStyles()
    const [open, setOpen] = useState(false);
    
    const OpenSnackbar = () =>{
        setOpen(true);
      }
    const CloseSnackbar = (_, r) =>{
        if (r === "clickaway"){
          return;
        }
        setOpen(false);
    }
    
    return(
        <div>
            <div>
            <Typography
                variant="h2"
                color="textSecondary"
                >
                    Categories
                </Typography>
            </div>
            <div className={classes.root}>
                <Masonry
                breakpointCols={breakpointsCategory}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid-column"
                >   
                    {sampleData.map(item=>(
                        <div>
                            <CategoryCard data={item}></CategoryCard>
                        </div>

                    ))}
                </Masonry>

            </div>
            <div>
                <Typography
                variant="h2"
                color="textSecondary"
                className={classes.offers}
                >
                    Offers
                </Typography>
            </div>
            <div className={classes.root}>
                    <Masonry
                    breakpointCols={breakpointsOffers}
                    className="my-masonry-grid-offers"
                    columnClassName="my-masonry-grid-column"
                    >
                        {sampleOffers.map(item=>(
                        <div>
                            <ItemCard data={item} open={open} onOpen={OpenSnackbar} onClose={CloseSnackbar} ></ItemCard>
                        </div>

                    ))}

                    </Masonry>
            </div>
        </div>
    )
    
}
export default MainSite;
