import React from 'react';
import { Route, Switch } from 'react-router';
import { DetailedPage, MainPage } from './pages';



const routes = (
    <div className='router'>
        <Switch>
            <Route exact path='/' component={ MainPage }/>
            <Route path='/country/:countryName' component={ DetailedPage }/>
        </Switch>
    </div>
);

export default routes;
