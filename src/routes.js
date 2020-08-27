import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Sign_up';
import Task from './pages/Task';
import NewTask from './pages/NewTask';
import Landing from './pages/Landing';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route  path='/' exact component={Landing}  />
        <Route  path='/login' exact component={Login}  />
        <Route  path='/sign_up' exact component={Signup}  />
        <Route  path='/task' component={Task}  />
        <Route  path='/newtask'  component={NewTask} />
      </Switch>
    </BrowserRouter>
  );
}