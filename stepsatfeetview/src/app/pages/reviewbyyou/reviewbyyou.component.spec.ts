import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewbyyouComponent } from './reviewbyyou.component';

describe('ReviewbyyouComponent', () => {
  let component: ReviewbyyouComponent;
  let fixture: ComponentFixture<ReviewbyyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewbyyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewbyyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
