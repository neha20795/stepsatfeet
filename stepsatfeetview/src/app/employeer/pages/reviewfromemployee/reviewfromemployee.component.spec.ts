import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewfromemployeeComponent } from './reviewfromemployee.component';

describe('ReviewfromemployeeComponent', () => {
  let component: ReviewfromemployeeComponent;
  let fixture: ComponentFixture<ReviewfromemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewfromemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewfromemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
