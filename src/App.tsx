import React, { FC } from 'react';
import { ConnectedRouter } from 'connected-react-router';

import { appHistory } from './store/store';
import routes from './routes';
import Header from './components/header/header';

import './app.scss';

export const App: FC = () => {
    return (
        <div className='app'>
            <Header/>
            <ConnectedRouter history={ appHistory }>{ routes }</ConnectedRouter>
        </div>
    );
};
