import { Reducer } from 'redux';
import { ActionType, getType } from 'typesafe-actions';

import * as actions from './actions';

export type MoviesAction = ActionType<typeof actions>;

const reducer: Reducer<string, MoviesAction> = (state: string = '', action) => {
    switch (action.type) {
        case getType(actions.setQueryString): {
            return action.payload;
        }

        default: {
            return state;
        }
    }
};

export default reducer;
