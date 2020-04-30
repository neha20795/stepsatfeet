import { TestBed } from '@angular/core/testing';

import { EmployeestateService } from './employeestate.service';

describe('EmployeestateService', () => {
  let service: EmployeestateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeestateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
