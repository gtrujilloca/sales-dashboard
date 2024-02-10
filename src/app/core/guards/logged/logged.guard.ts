import { CanActivateFn } from '@angular/router';

export const LoggedGuard: CanActivateFn = (route, state) => {
  return true;
};
