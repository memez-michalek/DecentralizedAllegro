import React from 'react';
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {IconButton} from "@material-ui/core";
import {DeleteOutlined} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
function UsersCard({data, deleteElement}){

    function deleteContent(e){
        e.preventDefault();
        deleteElement(data.id)
    }


    return(
       <Container>
           <Card elevation={1} >
                <CardHeader
                action={
                    <IconButton >
                        <DeleteOutlined onClick={deleteContent}/>
                    </IconButton>
                }
                title={data.name}
                subheader={data.surname}
                />
                <CardContent>
                    <Typography variant="body1" color="primary">{data.description}</Typography>
                </CardContent>


           </Card>
       </Container>

    )


}
export default UsersCard;