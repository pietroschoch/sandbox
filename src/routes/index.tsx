import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import TasksApp from '../pages/Posts/TasksApp';
import Startup from '../pages/Posts/Startup';
import EcommerceRP from '../pages/Posts/EcommerceRP';
import Brondby from '../pages/Posts/Brondby';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/posts/tasks" component={TasksApp} />
      <Route path="/posts/startup" component={Startup} />
      <Route path="/posts/ecommerce" component={EcommerceRP} />
      <Route path="/posts/brondby" component={Brondby} />
    </Switch>
  </>
);

export default Routes;
