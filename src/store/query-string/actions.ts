import { createAction } from 'typesafe-actions';

export const setQueryString = createAction(
    'SET_QUERY_STRING',
    resolve => (queryString: string) => resolve(queryString)
);
