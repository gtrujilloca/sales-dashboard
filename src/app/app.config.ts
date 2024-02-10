import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { appEffects, appReducer } from './domain/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(appReducer),
    provideStoreDevtools({ maxAge: 25 }),
    provideEffects(appEffects),
  ]
};
