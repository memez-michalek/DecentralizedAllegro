import logo from './logo.svg';
import "./index.css";
import React from "react"

import Payments from "./build/contracts/Payments.json"
import {NotificationContainer, NotificationManager}  from "react-notifications"
import Typography from "@material-ui/core/Typography";

import {ThemeProvider} from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainSite from "./sites/MainSite"
import Layout from "./components/Layout";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#f46535"
    },
    primary:{ 
      main: "#f4c535"
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
  async componentDidMount() {
   
  }

  

  render(){
    

    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={MainSite}/>
            </Switch>
          </Layout>
      </Router>
    </ThemeProvider>
    )
  }
}
export default App;

