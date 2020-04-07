import { TestBed } from '@angular/core/testing';

import { ConfidentialreviewService } from './confidentialreview.service';

describe('ConfidentialreviewService', () => {
  let service: ConfidentialreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfidentialreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
