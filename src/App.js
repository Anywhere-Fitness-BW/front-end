import './App.css';
import React from 'react';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

// import ClientView from './ClientView'
// import InstructorView from './InstructorView'
// import CreateClass from './CreateClass'


function App() {
  return (

    <Router>
      {/* <Route path="/">
        <div className="navBar">
          Logged in as : Username | Role | <Link to={'/'}>Back to home</Link>
          
        </div>
      </Route>
      <Route exact path="/">
        <div className="App">
          <div className="App-header">
            Main
           
          </div>
          
        </div>
      </Route>
      <Route path="/client">
        <ClientView/>
      </Route>
      <Route path="/instructor">
        <InstructorView/>
      </Route>
      <Route path="/createclass">
        <CreateClass/>
      </Route> */}
     <div>
     <Link to='/Home'>
                <button>Register</button>
           </Link>
      <Switch>
          <Route exact path="/Home" component={Home} >
            
            
            </Route>
        </Switch>
        </div>
     
    </Router>
    
  );
}

export default App;
