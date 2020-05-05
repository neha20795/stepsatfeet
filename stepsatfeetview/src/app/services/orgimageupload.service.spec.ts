import { TestBed } from '@angular/core/testing';

import { OrgimageuploadService } from './orgimageupload.service';

describe('OrgimageuploadService', () => {
  let service: OrgimageuploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgimageuploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
