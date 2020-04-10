import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeersignupComponent } from './employeersignup.component';

describe('EmployeersignupComponent', () => {
  let component: EmployeersignupComponent;
  let fixture: ComponentFixture<EmployeersignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeersignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
