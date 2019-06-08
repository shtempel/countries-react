import React, { FC } from 'react';
import { ConnectedRouter } from 'connected-react-router';

import { appHistory } from './store/store';
import routes from './routes';

import './App.css';

export const App: FC = () => {
    return (
        <ConnectedRouter history={ appHistory }>{ routes }</ConnectedRouter>
    );
};
