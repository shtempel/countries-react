import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { store } from './store/store';
import { App } from './App';
import { Provider } from 'react-redux';
import { initTranslationService } from './services/translation-service';
import { init } from './store/actions';

import './index.scss';

store.dispatch(init());
initTranslationService().init({ lng: store.getState().language });

ReactDOM.render(
    <Provider store={ store }>
        <Suspense fallback={ null }>
            <App/>
        </Suspense>
    </Provider>,
    document.getElementById('root'));

