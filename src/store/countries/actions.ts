import { createAction } from 'typesafe-actions';

import { CountryResponse } from '../../services/typings';

export const fetchCountries = createAction('FETCH_COUNTRIES');

export const fetchCountriesSuccess = createAction(
    'FETCH_COUNTRIES_SUCCESS',
    resolve => (countries: CountryResponse[]) => resolve(countries)
);

export const fetchCountriesFail = createAction(
    'FETCH_COUNTRIES_FAIL',
    resolve => (payload: Error) => resolve(payload)
);

export const fetchCountryByAlpha = createAction('FETCH_COUNTRY_BY_ALPHA');

export const fetchCountryByAlphaSuccess = createAction(
    'FETCH_COUNTRY_BY_ALPHA_SUCCESS',
    resolve => (countries: CountryResponse) => resolve(countries)
);

export const fetchCountryByAlphaFail = createAction(
    'FETCH_COUNTRY_BY_ALPHA_FAIL',
    resolve => (payload: Error) => resolve(payload)
);
