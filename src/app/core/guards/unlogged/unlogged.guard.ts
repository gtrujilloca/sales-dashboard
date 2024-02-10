import { CanActivateFn } from '@angular/router';

export const UnloggedGuard: CanActivateFn = (route, state) => {
  return true;
};
