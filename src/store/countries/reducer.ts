import { Reducer } from 'redux';
import { ActionType, getType } from 'typesafe-actions';

import * as actions from './actions';
import { CountryResponse } from '../../services/typings';
import { emptyCountry } from './empty-country';

export type MoviesAction = | ActionType<typeof actions>;

export interface CountriesState {
    countries: CountryResponse[];
    country: CountryResponse;
}

const initialState: CountriesState = {
    countries: [],
    country: emptyCountry
};

const reducer: Reducer<CountriesState, MoviesAction> = (state = initialState, action) => {
    switch (action.type) {
        case getType(actions.fetchCountriesSuccess): {
            return {
                ...state,
                countries: action.payload
            };
        }

        case getType(actions.fetchCountryByAlphaSuccess): {
            return {
                ...state,
                country: action.payload
            };
        }

        default: {
            return state;
        }
    }
};

export default reducer;
