import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewfromorgComponent } from './reviewfromorg.component';

describe('ReviewfromorgComponent', () => {
  let component: ReviewfromorgComponent;
  let fixture: ComponentFixture<ReviewfromorgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewfromorgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewfromorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
