import { TestBed } from '@angular/core/testing';

import { EmpimageformService } from './empimageform.service';

describe('EmpimageformService', () => {
  let service: EmpimageformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpimageformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
