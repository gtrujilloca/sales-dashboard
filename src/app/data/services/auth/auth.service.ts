import { includeRequestToken } from '@/app/core/contexts';
import { ILogin, IUserResponse } from '@/app/core/models/auth.model';
import { _baseUrl } from '@/config';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _http: HttpClient = Inject(HttpClient);

  constructor() { }

  login(data: ILogin): Observable<IUserResponse> {
    return this._http.post<IUserResponse>(
      `${_baseUrl}/auth/login`,
      data,
    );
  }
}
