import { Dispatch } from 'redux';
import { ActionCreator, getType } from 'typesafe-actions';


export const dispatcher = (dispatch: Dispatch, action: ActionCreator<any>, actionPayload?: any) =>
    dispatch({ type: getType(action), payload: actionPayload });

export const push = (dispatch: Dispatch, pathname: string) =>
    dispatch({
        type: '@@router/LOCATION_CHANGE',
        payload: {
            location: { pathname: pathname },
            action: 'POP'
        }
    });
