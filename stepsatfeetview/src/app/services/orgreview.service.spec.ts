import { TestBed } from '@angular/core/testing';

import { OrgreviewService } from './orgreview.service';

describe('OrgreviewService', () => {
  let service: OrgreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
