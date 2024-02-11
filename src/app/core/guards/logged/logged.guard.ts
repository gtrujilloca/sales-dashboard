import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageKeys } from '../../models/localstorage';
import { getLocalstorageItem } from '../../utils';

export const LoggedGuard: CanActivateFn = () => {
  const _router = Inject(Router);

  const token = getLocalstorageItem(LocalStorageKeys['SALES.TOKEN']);
  if (token) {
    // TODO Get User
    return true;
  }

  _router.navigateByUrl('auth/login');
  return false;

};