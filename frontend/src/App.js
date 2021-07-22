import logo from './logo.svg';
import "./index.css";
import React from "react"

import Payments from "./build/contracts/Payments.json"
import {NotificationContainer, NotificationManager}  from "react-notifications"
import Typography from "@material-ui/core/Typography";
import LayoutComponent from "./components/LayoutComponent"
import Type from './sites/Type';
import {ThemeProvider} from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Form from "./sites/Form";
import Users from "./sites/Users"
const theme = createTheme({
  palette: {
    secondary: {
      main: '#551166'
    },
    primary: green,
  },
  typography: {
    fontFamily:'Amiri',
    fontWeightRegular: 400,
    fontWeightBold: 700,
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
          <LayoutComponent>
            <Switch>
              <Route exact path="/" component={Type}/>
              <Route path="/form" component={Form}/>
              <Route path="/users" component={Users}/>
            </Switch>
          </LayoutComponent>
      </Router>
    </ThemeProvider>
    )
  }
}
export default App;

