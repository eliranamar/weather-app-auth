import React from 'react';
import Logout from "./Logout";
import {Link} from 'react-router-dom'; //Calling link to bind with router
import { Route, Redirect } from "react-router";

class App extends React.Component {

  componentDidMount () {

  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to='/'>React weather project</Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
					    <Logout />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default App;