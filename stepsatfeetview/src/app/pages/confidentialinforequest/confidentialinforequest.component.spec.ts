import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialinforequestComponent } from './confidentialinforequest.component';

describe('ConfidentialinforequestComponent', () => {
  let component: ConfidentialinforequestComponent;
  let fixture: ComponentFixture<ConfidentialinforequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfidentialinforequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidentialinforequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
