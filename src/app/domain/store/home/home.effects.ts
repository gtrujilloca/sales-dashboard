import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { HomeActions } from "..";
import { ProductService } from "@/app/data/services/products/product.service";

@Injectable()
export class HomeEffects {
  // private _router: Router = Inject(Router);
  private _productSrv: ProductService = Inject(ProductService);

  constructor(
    private _actions$: Actions,
  ) { }

  getKpis$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(HomeActions.getKpisAction),
        switchMap(() => this._productSrv.getKpi().pipe(
          map((kpis) => HomeActions.successKpisAction({ kpis })),
        ))
      )
    ,
  )

}