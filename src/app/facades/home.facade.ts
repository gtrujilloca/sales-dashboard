import { IKpi } from '@/app/core/models/products.model';
import { RootState } from '@/app/domain/store';
import { getKpisAction } from '@/app/domain/store/home/home.actions';
import { HomeSelectors } from '@/app/domain/store';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({ providedIn: 'root' })
export class HomeFacade {
  isLoadingKpis$: Observable<boolean | null>;
  kpis$: Observable<IKpi[] | null>;
  constructor(
    private readonly _store: Store<RootState>,
  ) {
    this.isLoadingKpis$ = this._store.select(HomeSelectors.selectIsLoadingKpis);
    this.kpis$ = this._store.select(HomeSelectors.selectKpis);
  }

  getKpis() {
    this._store.dispatch(getKpisAction());
  }
}