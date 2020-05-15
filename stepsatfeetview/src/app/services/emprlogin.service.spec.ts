import { TestBed } from '@angular/core/testing';

import { EmprloginService } from './emprlogin.service';

describe('EmprloginService', () => {
  let service: EmprloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmprloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
