import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Career from './pages/Career/career';
import { Navbar } from './components/Navbar/Navbar';

const Routes = () => {
  return(
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/career' component={Career}/>
      </Switch>
    </BrowserRouter>
  )
}
export default Routes;

