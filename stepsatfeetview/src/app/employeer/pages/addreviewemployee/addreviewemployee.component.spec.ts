import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreviewemployeeComponent } from './addreviewemployee.component';

describe('AddreviewemployeeComponent', () => {
  let component: AddreviewemployeeComponent;
  let fixture: ComponentFixture<AddreviewemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddreviewemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreviewemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
