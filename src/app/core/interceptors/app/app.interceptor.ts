import { HttpErrorResponse, HttpHeaders, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { getLocalstorageItem } from '@/app/core/utils';
import { LocalStorageKeys } from '@/app/core/models';
import { HAS_REQUEST_TOKEN } from '@/app/core/contexts';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { retry } from 'rxjs/internal/operators/retry';
import { map } from 'rxjs/internal/operators/map';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  let newReq = req;

  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  if (req.context.get(HAS_REQUEST_TOKEN)) {
    const token = getLocalstorageItem(LocalStorageKeys['SALES.TOKEN']);
    headers.append('Authorization', `Bearer ${token}`);

    newReq = req.clone({
      headers,
    });
  }


  return next(newReq).pipe(
    retry(1),
    catchError((err) => _catchError(newReq, err)),
    map((res) => res),
  );

};
function _catchError(req: HttpRequest<any>, error: HttpErrorResponse) {
  return throwError(() => new Error(error.message || 'Server Error'));
}
