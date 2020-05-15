import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewforyouComponent } from './reviewforyou.component';

describe('ReviewforyouComponent', () => {
  let component: ReviewforyouComponent;
  let fixture: ComponentFixture<ReviewforyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewforyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewforyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
