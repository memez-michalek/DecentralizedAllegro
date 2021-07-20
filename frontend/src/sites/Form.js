import React from 'react';
import ReactDOM from 'react-dom';
import TextField from "@material-ui/core/TextField";
import MakeStyles from "@material-ui/core";
import Container from "@material-ui/core/Container"


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', surname: '', age: ''}
    }
    onChange = (e) =>{
        e.preventDefault();
        switch (e.target){
            case e.target.name === "name":
                break
            case e.target.name === "surname":
                break
            case e.target.name === "age":
                break
            default:
                break
        }

    }
    render() {
        return(
            <Container>
            <form noValidate autoComplete="off">
                <TextField name="name"></TextField>
            </form>



            </Container>
        )

    }




}

export default Form;
