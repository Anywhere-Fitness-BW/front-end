import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home2 from './Components/Home2';
import Nav from './Components/Nav';
import Login from './Components/Login';
import Register from './Components/Register';
import {BrowserRouter, Route, Switch} from "react-router-dom";

function Home () {
    return (
        <BrowserRouter>
          <div className="App">
            <Nav />
        
            <div className="auth-wrapper">
              <div className="auth-inner">
                
                <Switch>
                  <Route exact path="/" component={Home2} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/Register" component={Register} /> 
                </Switch>
              </div>
             </div>
            </div>
        
            </BrowserRouter>
          );
}

export default Home;