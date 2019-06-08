import React from 'react';
import { Route, Switch } from 'react-router';

import * as pages from './pages';

const routes = (
    <div>
        <Switch>
            <Route exact path='/' component={ pages.MainPage }/>
            <Route path='/search/:searchQuery' component={ pages.MainPage }/>
        </Switch>
    </div>
);

export default routes;
