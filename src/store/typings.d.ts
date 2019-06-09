import { Router } from './router/interfaces';
import { CountryResponse } from '../services/typings';

export interface AppState {
    router: Router;
    language: string;
    query: string;
    countries: CountryResponse[];
}
