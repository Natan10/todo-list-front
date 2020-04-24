import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

import Login from './pages/Login';
import Task from './pages/Task';
import NewTask from './pages/NewTask';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route  path='/' exact component={Login}  />
        <Route  path='/task' component={Task}  />
        <Route  path='/newtask'  component={NewTask} />
      </Switch>
    </BrowserRouter>
  );
}