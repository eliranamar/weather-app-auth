import React from 'react';
import WeatherApp from './WeatherApp';
import About from './weatherApp/common/About';
import Registration from './weatherApp/common/Registration';
import Login from './weatherApp/common/Login';
import Page404 from './weatherApp/common/404';
import {Switch, Route} from 'react-router-dom';

const Routesss = () => (
    <div className="container">
         <Switch>
            <Route name="home" exact path='/' component={WeatherApp} />
            <Route name="about" exact path='/about' component={About} />
            <Route name="register" exact path='/register' component={Registration} />
            <Route name="login" exact path='/login' component={Login} />
            <Route path="*" component={Page404}/>
        </Switch>
    </div>
)

export default Routesss;
