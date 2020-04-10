import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddempconfidentialreviewComponent } from './addempconfidentialreview.component';

describe('AddempconfidentialreviewComponent', () => {
  let component: AddempconfidentialreviewComponent;
  let fixture: ComponentFixture<AddempconfidentialreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddempconfidentialreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddempconfidentialreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
