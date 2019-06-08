import { Reducer } from 'redux';
import { ActionType, getType } from 'typesafe-actions';

import * as actions from './actions';

export interface CountriesState {

}

export type MoviesAction =
    | ActionType<typeof actions>;

export const initialState: CountriesState = {};

const reducer: Reducer<CountriesState, MoviesAction> = (state = initialState, action) => {
    switch (action.type) {
        case getType(actions.getAllCountries): {
            return {
                ...state
            }
        }

        default: {
            return state;
        }
    }
};

export default reducer;
