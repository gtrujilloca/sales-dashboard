import { AuthService } from "@/app/data/services";
import { Inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthActions } from "..";
import { setLocalstorageItem } from "@/app/core/utils";
import { LocalStorageKeys } from "@/app/core/models";
import { exhaustMap } from "rxjs/internal/operators/exhaustMap";
import { map } from "rxjs/internal/operators/map";
import { catchError } from "rxjs/internal/operators/catchError";
import { of } from "rxjs/internal/observable/of";
import { tap } from "rxjs";

@Injectable()
export class AuthEffects {
  private _router: Router = Inject(Router);
  private _authSrv: AuthService = Inject(AuthService);

  constructor(
    private _actions$: Actions,
  ) { }

  login$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(AuthActions.loginAction),
        exhaustMap((action) => this._authSrv.login(action.data).pipe(
          map((data) => {
            setLocalstorageItem(LocalStorageKeys["SALES.TOKEN"], data.jwt);
            return AuthActions.loginSuccessAction;
          }),
          catchError((error) => of(AuthActions.loginErrorAction, error))
        ))
      )
    ,
    {
      dispatch: false
    }
  );

  loginSuccess$ = createEffect(
    () => this._actions$.pipe(
      ofType(AuthActions.loginSuccessAction),
      tap(
        () => this._router.navigate(["/home"])
      ),
    ),
    {
      dispatch: false
    }
  )
}