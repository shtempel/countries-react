import { AppState } from '../typings';
import { createSelector } from 'reselect';

export const countriesState = (state: AppState) => state.countries;

export const selectcountries = createSelector(
    countriesState,
    moviesState => moviesState
);
