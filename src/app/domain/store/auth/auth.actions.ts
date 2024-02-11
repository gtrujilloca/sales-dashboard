import { ILogin, ILoginError } from "@/app/core/models/auth.model";
import { NgrxKeys } from "@/app/core/models/ngrx-keys";
import { createAction, props } from "@ngrx/store";

export const loginAction = createAction(NgrxKeys.AUTH_LOGIN, props<{ data: ILogin }>());
export const loginSuccessAction = createAction(NgrxKeys.AUTH_LOGIN_SUCCESS);
export const loginErrorAction = createAction(NgrxKeys.AUTH_LOGIN_ERROR, props<{ data: ILoginError }>());