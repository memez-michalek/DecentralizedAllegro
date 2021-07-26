import logo from './logo.svg';
import "./index.css";
import React from "react"

import Payments from "./build/contracts/Payments.json"
import {NotificationContainer, NotificationManager}  from "react-notifications"
import Typography from "@material-ui/core/Typography";
import { SnackbarProvider } from 'notistack';

import {ThemeProvider} from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles';
import LoginFormSite from "./sites/LoginFormSite"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainSite from "./sites/MainSite"
import Layout from "./components/Layout";
import FaqSite from "./sites/FaqSite"
import ProfileSite from "./sites/ProfileSite"
import RegisterFormSite from "./sites/RegisterFormSite"
const theme = createTheme({
  palette: {
    secondary: {
      main: "#f46535"
    },
    primary:{ 
      main: "#f9e902"
    },
  },
  typography: {
    fontFamily: 'OpenSans',
    fontSize: "16",
    fontWeightLight: 300,
    fontWeightSemibold: 600,
    fontWeightBold: 700,
    fontWeightExtraBold: 800,
  }
})


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state ={}
  }


  

  render(){
    

    return (
      <ThemeProvider theme={theme} >
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" >
                <MainSite></MainSite>
              </Route>
              <Route path="/faq" component={FaqSite}/>
              <Route path="/register" component={RegisterFormSite}/>
              <Route path="/profile" component={ProfileSite}/>
              <Route path="/login" component={LoginFormSite}/>
            </Switch>
          </Layout>
      </Router>
    </ThemeProvider>
    )
  }
}
export default App;

