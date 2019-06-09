import { AppSavedState } from './saved-state/interfaces';
import { Router } from './router/interfaces';

export interface AppState extends AppSavedState {
    router: Router;
    language: string;
}
