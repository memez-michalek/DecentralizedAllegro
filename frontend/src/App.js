
import "./index.css";
import React from "react"
import loadable from '@loadable/component'
import {ThemeProvider} from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


const MainSite = loadable(()=> import("./sites/MainSite"))
const Layout = loadable(()=>import("./components/Layout"))
const LoginFormSite = loadable(()=> import("./sites/LoginFormSite"))
const FaqSite = loadable(()=> import("./sites/FaqSite"))
const ProfileSite = loadable(()=> import("./sites/ProfileSite"))
const RegisterFormSite = loadable(()=> import("./sites/RegisterFormSite"))
const AddListing = loadable(()=> import("./sites/AddListing"))
const DepositSite = loadable(()=> import("./sites/DepositSite"))

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
              <Route path="/addlisting" component={AddListing}></Route>
              <Route path="/deposit" component={DepositSite}/>            </Switch>
          </Layout>
      </Router>
    </ThemeProvider>
    )
  }
}
export default App;

