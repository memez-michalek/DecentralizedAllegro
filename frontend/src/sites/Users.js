import React from 'react';
import ReactDom from 'react-dom';
import Container from "@material-ui/core/Container"
import {makeStyles} from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import UsersCard from "../components/UsersCard"

const useStyles = makeStyles({
    user: {
        marginTop: 20,
        marginBottom: 20,
        display: "block",
        backgroundColor: "#229fe2"
    }
})


function Users(){
    
    const [data, changeData] = useState([])
    
    
    useEffect(()=>{
    fetch("http://localhost:8000/users")
        .then(res=> res.json())
        .then(data=> changeData(data))
}, [])
const deleteUsers = async (id) =>{
    await fetch("http://localhost:8000/users/" + id,{
        method: "DELETE",
    })
    const newUsers = data.filter(data => data.id !== id)
    changeData(newUsers)

}
return(
    <Container>
    {/*<Container>
        <Grid container>
            <Grid item xs={12} sm={6} md={4}>
                <Paper>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper>2</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper>3</Paper>
            </Grid>
        </Grid>
    */}
    <Grid container spacing={3}>
        {data.map(data=>(
            <Grid item key={data.id} xs={12} md={6} lg={4}>
                <UsersCard data={data} deleteElement={deleteUsers}></UsersCard>


            </Grid>

        ))}

    </Grid>




        


    </Container>
)


}

export default Users;