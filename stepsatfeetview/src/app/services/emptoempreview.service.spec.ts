import { TestBed } from '@angular/core/testing';

import { EmptoempreviewService } from './emptoempreview.service';

describe('EmptoempreviewService', () => {
  let service: EmptoempreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmptoempreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
