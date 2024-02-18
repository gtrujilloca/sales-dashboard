import { Inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { RootState, AuthSelectors, AuthActions } from '@/app/domain/store';
import { ILogin, ILoginError } from "@/app/core/models";

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  isLoading$: Observable<boolean>;
  isError$: Observable<string | null>;

  private readonly _store: Store<RootState> = Inject(Store);

  constructor() {
    this.isError$ = this._store.select(AuthSelectors.selectHasErrorLogin);
    this.isLoading$ = this._store.select(AuthSelectors.selectIsLoadingLogin);
  }

  login(data: ILogin): void {
    this._store.dispatch(AuthActions.loginAction({ data }));
  }

  setLoginError(data: ILoginError): void {
    this._store.dispatch(AuthActions.loginErrorAction({ data }));
  }
}