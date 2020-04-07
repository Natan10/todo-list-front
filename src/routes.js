import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

import Login from './pages/Login';
import Task from './pages/Task';


export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route  path='/' exact component={Login}  />
        <Route  path='/task' component={Task}  />
      </Switch>
    </BrowserRouter>
  );
}