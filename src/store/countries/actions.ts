import { createAction } from 'typesafe-actions';

export const getCountries = createAction('GET_ALL');

export const getCountriesSuccess = createAction('GET_ALL_SUCCESS');

export const getCountriesFailx = createAction('GET_ALL_FAIL');
