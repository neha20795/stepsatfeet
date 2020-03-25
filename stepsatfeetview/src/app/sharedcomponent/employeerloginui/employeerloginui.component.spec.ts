import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerloginuiComponent } from './employeerloginui.component';

describe('EmployeerloginuiComponent', () => {
  let component: EmployeerloginuiComponent;
  let fixture: ComponentFixture<EmployeerloginuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeerloginuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeerloginuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
