import React from 'react';
import reactDom from 'react-dom';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import PlusOneSharpIcon from '@material-ui/icons/PlusOneSharp';
import {makeStyles} from '@material-ui/core'

/*
const useStyles = makeStyles({
    btn:{
        fontSize: 50,
        backgroundColor: 'cyan',
        '&:hover':{
            backgroundColor: 'black'
        }
    },
    title:{
        fontSize: 36,
        backgroundColor: 'green',
        fontFamily: 'Helvetica',
        color: 'white',
        textDecoration: 'overline',
        marginBottom: 50
    }
})
*/

class Type extends React.Component {
    

    


    render(){
        return(
            <div>
                <Container>
                <Typography
                variant="h2"
                component="h6"
                //className={this.props.style.title}
                color="Primary"
                align="center"
                gutterBottom
                >

                    Siema Eniu
                </Typography>

                <Button
                //className={this.props.style.btn}
                color="secondary"
                size="large"
                variant="contained"
                type="submit"
                onClick={this.onClick}
                startIcon={<PlusOneSharpIcon/>}
                endIcon={<PlusOneSharpIcon/>}
                >
                    Dawaj dane gnoju
                </Button>
            <div>
            <PlusOneSharpIcon/>    
            <PlusOneSharpIcon color="secondary" fontSize="large"/>          
            </div>
            </Container>

                {/*
                <Button
                variant="outlined"
                color="secondary"
                
                >
                    Click Me
                </Button>
                <Button
                color="textPrimary"
                variant="contained"
                >
                    Fuck me
                </Button>
                <Button
                color="primary"
                type="submit"
                variant="outlined"
                >
                    JD
                </Button>

                <ButtonGroup
                color="secondary"
                variant="contained"
                size="medium"
                >
                    <Button >
                        ESKEETIT
                    </Button>
                    <Button>
                        ITS JUST ME OR MY PACK OF MALBOROS 
                    </Button>


                </ButtonGroup>




            <div>
                <Typography 
                variant="h1"
                color="secondary"
                align="center"
                
                >
                Chuj
                </Typography>
                <Typography 
                color="primary"
                noWrap
                gutterBottom
                >
                    Magnam corporis veniam aut reiciendis. Omnis autem nisi aliquam. Ea vel asperiores reprehenderit.

Illo pariatur vero quae ut nam omnis consequatur. Sed pariatur maiores magni inventore

                </Typography>



            </div>
            */}
            
        
           </div>
        )
    }

}
export default () =>{
    //const style = useStyles();
    return(
    <Type ></Type>
    )
}