import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Help from './pages/Help/Help';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/home' component={Home}/>
                <Route path='/help' component={Help}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;

