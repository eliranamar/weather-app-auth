import React from 'react';
import WeatherApp from './WeatherApp';
import About from './weatherApp/common/About';
import Registration from './weatherApp/common/Registration';
import Login from './weatherApp/common/Login';
import Page404 from './weatherApp/common/404';
import { Switch, Route } from 'react-router-dom';

const Routesss = (props) => (
    <div className="container">
        <Switch>
            <Route name="home" exact path='/' component={WeatherApp} />
            <Route name="about" exact path='/about' component={About} />
            <Route name="register" exact path='/register' render={() => <Registration setUserState={props.setUserState} />} />
            <Route name="login" exact path='/login' render={() => <Login setUserState={props.setUserState} />} />
            <Route path="*" component={Page404} />
        </Switch>
    </div>
)

export default Routesss;
