import { AuthEffects } from './auth/auth.effects';
import { authReducer } from './auth/auth.reducer';
import { AuthState } from './auth/auth.state';
import { HomeEffects } from './home/home.effects';
import { homeReducer } from './home/home.reducer';
import { HomeState } from './home/home.state';

import * as AuthActions from './auth/auth.actions';
import * as HomeActions from './home/home.actions';


import * as HomeSelectors from './home/home.selectors';
import * as AuthSelectors from './auth/auth.selectors';

export interface RootState {
  auth: AuthState;
  home: HomeState;
}

export const appReducer = {
  auth: authReducer,
  home: homeReducer,
};

export const appEffects = [AuthEffects, HomeEffects];

export {
  AuthActions,
  HomeActions,
  HomeSelectors,
  AuthSelectors
};