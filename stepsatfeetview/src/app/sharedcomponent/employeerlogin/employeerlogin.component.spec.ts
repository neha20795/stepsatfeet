import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerloginComponent } from './employeerlogin.component';

describe('EmployeerloginComponent', () => {
  let component: EmployeerloginComponent;
  let fixture: ComponentFixture<EmployeerloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeerloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
