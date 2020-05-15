import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialreviewlistComponent } from './confidentialreviewlist.component';

describe('ConfidentialreviewlistComponent', () => {
  let component: ConfidentialreviewlistComponent;
  let fixture: ComponentFixture<ConfidentialreviewlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfidentialreviewlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidentialreviewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
