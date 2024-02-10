import { createAction, props } from '@ngrx/store';
// import { ILogin } from 'src/app/core/models/auth.model';

export const loginAction = createAction(
  '[Auth] LoginAction',
  props<{ data: any }>()
);
export const loginSuccessAction = createAction('[Auth] LoginSuccessAction');
export const loginErrorAction = createAction(
  '[Auth] LoginErrorAction',
  props<{ message: string }>()
);