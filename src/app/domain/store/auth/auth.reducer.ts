import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthState } from './auth.state';

export const initialAuthState: AuthState = {
  loginData: null,
  isLoading: false,
  hasError: null,
};

const authReducerInternal = createReducer(
  initialAuthState,
  on(AuthActions.loginAction, (state, { data }) => {
    return {
      ...state,
      loginData: data,
      isLoading: true,
      hasError: null,
    };
  }),
  on(AuthActions.loginSuccessAction, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(AuthActions.loginErrorAction, (state, { data }) => {
    return {
      ...state,
      isLoading: false,
      hasError: data.message
    };
  })
)

export function authReducer(state: AuthState | undefined, action: any){
  return authReducerInternal(state, action);
}