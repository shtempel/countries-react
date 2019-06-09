import countriesReducer from './countries/reducer';
import languageStateReducer from './language/reducer';
import queryReducer from './query-string/reducer';

export default {
    language: languageStateReducer,
    countriesState: countriesReducer,
    query: queryReducer
};
