import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
    
    render(){
        return (
            <nav className="navbar navbar-expand navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={'/'}>Home</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nave-item">
              <Link to={'/Login'} className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to={'/Register'} className="nav-link">Sign up</Link>
            </li>
          </ul>
        </div>

      </div>

    </nav>
        )
    }
}