import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { LoggedGuard } from './logged.guard';

describe('LoggedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => LoggedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
