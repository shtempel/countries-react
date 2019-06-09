import { Reducer } from 'redux';
import { ActionType, getType } from 'typesafe-actions';

import * as actions from './actions';
import { CountryResponse } from '../../services/typings';

export type MoviesAction = | ActionType<typeof actions>;

export const initialState: CountryResponse[] = [];

const reducer: Reducer<CountryResponse[], MoviesAction> = (state = initialState, action) => {
    switch (action.type) {
        case getType(actions.fetchCountriesSuccess): {
            return action.payload;
        }

        default: {
            return state;
        }
    }
};

export default reducer;
