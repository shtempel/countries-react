import { AppState } from '../typings';
import { createSelector } from 'reselect';

export const countriesState = (state: AppState) => state.countriesState;

export const selectCountries = createSelector(
    countriesState,
    countriesState => countriesState.countries
);

export const selectCountry = createSelector(
    countriesState,
    countriesState => countriesState.country
);
