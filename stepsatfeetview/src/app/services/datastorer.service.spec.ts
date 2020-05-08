import { TestBed } from '@angular/core/testing';

import { DatastorerService } from './datastorer.service';

describe('DatastorerService', () => {
  let service: DatastorerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatastorerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
