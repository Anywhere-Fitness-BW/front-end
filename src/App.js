import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useLocation
} from "react-router-dom";
import ClientView from './ClientView'
import InstructorView from './InstructorView'
import CreateClass from './CreateClass'
import Login from './Login'
import Signup from './Signup'
function App() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Route path="/">
        {location.pathname !== "/" && 
          <div className="navBar">
            Logged in as : Username | Role | <Link to={'/'}>Back to home</Link>
          </div>
        }
      </Route>
      <Route exact path="/">
        <div className="App">
          <div className="App-header">
            Welcome to Anywhere Fitness!
            <Link to={'/login'}>
              <button>Login</button>
            </Link>
            <Link to={'/signup'}>
              <button>Signup</button>
            </Link>
          </div>
        </div>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/signup">
        <Signup/>
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
    </>
    
  );
}

export default App;
