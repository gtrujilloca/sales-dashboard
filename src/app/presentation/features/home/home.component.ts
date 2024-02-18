import { Component, Inject } from '@angular/core';
import { KpiComponent } from './components/kpi/kpi.component';
import { IKpi } from '@/app/core/models';
import { HomeFacade } from '@/app/facades/home.facade';
import { Observable } from 'rxjs/internal/Observable';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    KpiComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  kpis$: Observable<IKpi[] | null>;
  private _homeFacade: HomeFacade = Inject(HomeFacade);

  constructor() {
    this.kpis$ = this._homeFacade.kpis$;
  }

  ngOnInit(): void {
    this._homeFacade.getKpis();
  }
}
