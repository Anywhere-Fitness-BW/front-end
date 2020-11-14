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
      <Route exact path="/">
        <div className="App">
          <header className="App-header">
            Main
          </header>
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
