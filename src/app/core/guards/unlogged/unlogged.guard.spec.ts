import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { UnloggedGuard } from './unlogged.guard';

describe('UnloggedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => UnloggedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
