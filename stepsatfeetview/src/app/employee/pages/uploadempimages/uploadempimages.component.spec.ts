import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadempimagesComponent } from './uploadempimages.component';

describe('UploadempimagesComponent', () => {
  let component: UploadempimagesComponent;
  let fixture: ComponentFixture<UploadempimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadempimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadempimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
