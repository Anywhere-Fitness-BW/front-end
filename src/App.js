import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import ClientView from './ClientView'
import InstructorView from './InstructorView'
import CreateClass from './CreateClass'
function App() {
  return (
    <Router>
      <Route path="/">
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
      </Route>
    </Router>
    
  );
}

export default App;
