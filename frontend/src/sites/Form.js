import React from 'react';
import ReactDOM from 'react-dom';
import TextField from "@material-ui/core/TextField";
import MakeStyles from "@material-ui/core";
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import {makeStyles} from "@material-ui/core/"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import { FormControlLabel } from '@material-ui/core';
import FormLabel from "@material-ui/core/FormLabel"
import FormControl from "@material-ui/core/FormControl"






const style = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block',

    },

})



class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            nameError: false,
            surname: '', 
            surnameError: false,
            age: '', 
            ageError: false,
            description: "",
            descriptionError: false,
            gender: "",
        }
    }
    onChange = (e) =>{
        e.preventDefault();
        //console.log(e.target)
        switch (e.target.name){
            
            case "name":
                this.setState({name: e.target.value})
                break
            case "surname":
                this.setState({surname: e.target.value})
                break
            case  "age":
                this.setState({age: e.target.value})  
                break
            case "description":   
                this.setState({description: e.target.value})
                break
            case "gender":
                this.setState({gender: e.target.value})
                break
            default:
                break
        }

    }
    changeCategory = (e) =>{
        
        this.setState({category: e.target.value})
    }
    onSubmit = (e) =>{
        e.preventDefault()
        
        
        if(this.state.name === ""){
            this.setState({nameError: true})
        }else if(this.state.surname === ""){
            this.setState({surnameError: true})
        }else if(this.state.age === ""){
            this.setState({ageError: true})
        }else if(this.state.description === ""){
            this.setState({description: true})
        }else if(this.state.gender === ""){
            this.setState({genderError: true})
        }
        else{
            this.setState({nameError: false, surnameError: false, ageError: false, descriptionError: false, genderError: false})
            const name = this.state.name
            const surname = this.state.surname
            const description = this.state.description
            const age = this.state.age
            const gender = this.state.gender
            fetch("http://localhost:8000/users", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name, surname, description, age, gender})
            }).then(()=> this.props.history.push({pathname: "/"}))
            // send data to backend here
        }

        
    }
    render() {
        return(
            <Container>
            <Typography variant="h2" gutterBottom>
                Witaj 
            </Typography>
            <Typography variant="h5" gutterBottom>
                Dolacz do milionow uzytkownikow
            </Typography>

            
            <form noValidate autoComplete="off" onSubmit={this.onSubmit} method="post">
                <TextField 
                name="name" 
                label="imie" 
                variant="outlined" 
                color="secondary"
                onChange={this.onChange}
                fullWidth
                required
                className={style.form}
                error={this.state.nameError}
                />
                <TextField 
                name="surname" 
                label="nazwisko" 
                variant="outlined" 
                color="secondary"
                onChange={this.onChange}
                fullWidth
                required
                className={style.form}
                error={this.state.surnameError}
                />

                <TextField 
                variant="outlined"
                color="secondary"
                name="age"
                type="date"
                fullWidth
                required
                onChange={this.onChange}
                className={style.field}
                error={this.state.ageError}
                /> 
                              
                <TextField 
                name="description" 
                label="opis" 
                variant="outlined" 
                color="secondary"
                onChange={this.onChange}
                multiline
                rows={3}
                fullWidth
                required
                className={style.form}
                error={this.state.descriptionError}
                />
                <FormControl classname={style.form}>
                <FormLabel>Plec</FormLabel>
                <RadioGroup  onChange={this.onChange} >
                    <FormControlLabel name="gender" value="chlop" control={<Radio/>} label="chlop" />
                    <FormControlLabel name="gender" value="baba" control={<Radio/>} label="baba" />
               </RadioGroup>
               </FormControl>
               <div>
                <Button type="submit" variant="outlined" color="primary">Zarejestruj sie</Button>
                </div>

            </form>
            

            </Container>
        )

    }




}

export default Form;
