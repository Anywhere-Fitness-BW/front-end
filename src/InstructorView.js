import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
function InstructorView() {
  return (
    <div className="App">
      <header className="App-header">
        Instructor View
        <Link to={'/createclass'}>
          <button>Create Class</button>
        </Link>
        
      </header>
    </div>
  );
}

export default InstructorView;
