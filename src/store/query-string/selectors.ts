import { AppState } from '../typings';

export const selectSearchQuery = (state: AppState) => state.query;
