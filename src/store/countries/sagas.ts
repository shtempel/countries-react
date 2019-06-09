import { getType } from 'typesafe-actions';
import { throttle, select, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import { selectSearchQuery } from '../query-string/selectors';
import { countriesService } from '../../services';

function* watchFetchCountries() {
    yield throttle(1000, getType(actions.fetchCountries), fetchCountries);
}

function* fetchCountries() {
    try {
        const searchQuery = yield select(selectSearchQuery);
        const fetchedCountries = yield call([countriesService, countriesService.getCountries], searchQuery);
        yield put(actions.fetchCountriesSuccess(fetchedCountries));
    } catch (error) {
        yield put(actions.fetchCountriesFail(error));
    }
}

export const countriesSagas = [
    watchFetchCountries()
];
