import React  from 'react';

import HomePage from '../HomePage';
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';

import {MuiThemeProvider,createMuiTheme} from '@material-ui/core/styles';

import {CssBaseline} from '@material-ui/core';

import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';

// const tema=createMuiTheme();

 
const tema = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
  });
 

export default function App() {
    return(
        <MuiThemeProvider theme={tema}>
             <CssBaseline />
           <Router>
              <Switch>
                 <Route exact path="/" Component={HomePage} />
                 <Route exact path="/login" Component={Login} />
                 <Route exact path="/register" Component={Register} />
                 <Route exact path="/dashboard" Component={Dashboard} />
              </Switch> 
           </Router>
        </MuiThemeProvider>
    )
}