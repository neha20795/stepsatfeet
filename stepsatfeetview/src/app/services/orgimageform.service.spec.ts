import { TestBed } from '@angular/core/testing';

import { OrgimageformService } from './orgimageform.service';

describe('OrgimageformService', () => {
  let service: OrgimageformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgimageformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
