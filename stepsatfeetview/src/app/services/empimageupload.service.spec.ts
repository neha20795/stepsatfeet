import { TestBed } from '@angular/core/testing';

import { EmpimageuploadService } from './empimageupload.service';

describe('EmpimageuploadService', () => {
  let service: EmpimageuploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpimageuploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
