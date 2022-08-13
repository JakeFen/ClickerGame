import { TestBed } from '@angular/core/testing';

import { GameGuard } from './app.gameGuard';

describe('GuardGuard', () => {
  let guard: GameGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GameGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
