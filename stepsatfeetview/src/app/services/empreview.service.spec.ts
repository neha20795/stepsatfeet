import { TestBed } from '@angular/core/testing';

import { EmpreviewService } from './empreview.service';

describe('EmpreviewService', () => {
  let service: EmpreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
