import React from 'react';
import { Route } from 'react-router-dom';

import Dashboard from '../Dashboard/';
import NewTransaction from '../New';
import Security from '../Security';

const Routes = () => (
  <div>
    <Route exact path='/' component={Dashboard} />
    <Route exact path='/security/' component={NewTransaction} />
    <Route exact path='/security/:ticker' component={Security} />
  </div>
)

export default Routes;
