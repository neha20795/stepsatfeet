import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewfromempComponent } from './reviewfromemp.component';

describe('ReviewfromempComponent', () => {
  let component: ReviewfromempComponent;
  let fixture: ComponentFixture<ReviewfromempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewfromempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewfromempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
