import { CountriesState } from './countries/reducer';
import { Router } from './router/interfaces';

export interface AppState {
    router: Router;
    language: string;
    query: string;
    countriesState: CountriesState;
}
