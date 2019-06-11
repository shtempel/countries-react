import React from 'react';
import { Route, Switch } from 'react-router';

import * as pages from './pages';

const routes = (
    <div>
        <Switch>
            <Route exact path='/' component={ pages.MainPage }/>
            <Route path='/country/:countryName' component={ pages.DetailedPage }/>
        </Switch>
    </div>
);

export default routes;
