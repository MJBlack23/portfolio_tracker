import React from 'react';
import { Route } from 'react-router-dom';

import Dashboard from '../Dashboard/';
import NewTransaction from '../New';

const Routes = () => (
  <div>
    <Route exact path='/' component={Dashboard} />
    <Route exact path='/security/new' component={NewTransaction} />
  </div>
)

export default Routes;
