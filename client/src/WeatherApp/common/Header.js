import React from 'react';
import Logout from "./Logout";
import {Link} from 'react-router-dom'; //Calling link to bind with router
import { Route, Redirect } from "react-router";

class App extends React.Component {

constructor(props) {
  super(props);

  this.state = {
    loggedIn: false
  }


}




  render() {
let login = <Link to="/login">Login</Link>;
let logout = <Link to="/logout">({this.props.user.username}) - Logout</Link>;

let loginOrOut = this.props.user.id ? logout : login;

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
              {loginOrOut}
            </li>
            
          </ul>
        </div>
      </nav>
    );
  }
}

export default App;