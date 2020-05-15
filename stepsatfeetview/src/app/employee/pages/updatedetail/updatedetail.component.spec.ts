import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedetailComponent } from './updatedetail.component';

describe('UpdatedetailComponent', () => {
  let component: UpdatedetailComponent;
  let fixture: ComponentFixture<UpdatedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
