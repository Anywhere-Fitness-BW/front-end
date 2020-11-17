
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './component/Home';
import Nav from './component/Nav';
import Login from './component/Login';
import Register from './component/Register';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


function App() {
  return (
<BrowserRouter>
  <div className="App">
    <Nav />

    <div className="auth-wrapper">
      <div className="auth-inner">
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Register" component={Register} /> 
        </Switch>
        

      </div>
     </div>
    </div>

    </BrowserRouter>
  );
}


export default App;
