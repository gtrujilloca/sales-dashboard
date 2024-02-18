import { includeRequestToken } from '@/app/core/contexts';
import { IKpi, KpiApiResponse } from '@/app/core/models';
import { _baseUrl } from '@/config';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _http: HttpClient = Inject(HttpClient);

  constructor() { }

  getKpi(): Observable<IKpi[]> {
    return this._http.get<KpiApiResponse>(
      `${_baseUrl}/kpi`,
      {
        context: includeRequestToken()
      }
    ).pipe(
      map((response) => {
        let { data } = response;
        return data.map((d) => ({ id: d.id, ...d.attributes }));
      })
    );
  }
}
