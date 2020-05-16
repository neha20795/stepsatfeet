import { TestBed } from '@angular/core/testing';

import { FindreviewsbyemployeeService } from './findreviewsbyemployee.service';

describe('FindreviewsbyemployeeService', () => {
  let service: FindreviewsbyemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindreviewsbyemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
