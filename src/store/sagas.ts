import { all } from 'redux-saga/effects';

import { countriesSagas } from './countries/sagas';

export default function* rootSaga() {
    yield all([...countriesSagas]);
}
