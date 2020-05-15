import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadorgimagesComponent } from './uploadorgimages.component';

describe('UploadorgimagesComponent', () => {
  let component: UploadorgimagesComponent;
  let fixture: ComponentFixture<UploadorgimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadorgimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadorgimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
