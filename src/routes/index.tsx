import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/Login.layout';
import Settings from '../pages/Settings/Settings.layout';
import Home from '../pages/Home/Home.layout';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/settings" component={Settings} />
    <Route path="/home" component={Home} />
  </Switch>
);

export default Routes;
