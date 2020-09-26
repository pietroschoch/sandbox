import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import StartupWeekend from '../pages/Posts/StartupWeekend';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/posts/startupweekend" component={StartupWeekend} />
    </Switch>
  </>
);

export default Routes;
