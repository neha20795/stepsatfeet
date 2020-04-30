import { TestBed } from '@angular/core/testing';

import { EmployeeloginGuard } from './employeelogin.guard';

describe('EmployeeloginGuard', () => {
  let guard: EmployeeloginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployeeloginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
