import React from 'react';
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {IconButton} from "@material-ui/core";
import {DeleteOutlined} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core"
import Avatar from "@material-ui/core/Avatar"
import {green, blue, pink} from "@material-ui/core/colors"
const style = makeStyles({
    
    t:{
        border: (data) =>{
            if(data.age < 60){
                return '1 px solid red'
            }
            else{
                return '10 px solid green'
            }
        } 
    },
    avatarColor:{
        backgroundColor: (data)=>{
                switch(data.name){
                    case "meme":
                        return green;
                    case "jd":
                        return blue;
                    default:
                        return pink;
                }
        }
    }
})
function UsersCard({data, deleteElement}){
    const classes = style(data);


    function deleteContent(e){
        e.preventDefault();
        deleteElement(data.id)
    }
    
  
    return(
       <Container>
           <Card elevation={1} className={classes.t}>
                <CardHeader
                action={
                    <IconButton >
                        <DeleteOutlined onClick={deleteContent}/>
                    </IconButton>
                }
                title={data.name}
                subheader={data.surname}
                avatar={
                    <Avatar className={classes.avatarColor}>
                        {data.name[0].toUpperCase()}
                    </Avatar>
                }
                />
                <CardContent>
                    <Typography variant="body1" color="primary">{data.description}</Typography>
                </CardContent>


           </Card>
       </Container>

    )


}
export default UsersCard;