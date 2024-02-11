import { ILogin, IUserResponse } from '@/app/core/models/auth.model';
import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _http: HttpClient = Inject(HttpClient);
  private _baseUrl: string = environment.API_BASE_URL;

  constructor() { }

  login(data: ILogin): Observable<IUserResponse> {
    return this._http.post<IUserResponse>(`${this._baseUrl}/auth/login`, data);
  }
}
