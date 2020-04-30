import { TestBed } from '@angular/core/testing';

import { EmploginService } from './emplogin.service';

describe('EmploginService', () => {
  let service: EmploginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
