import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginuiComponent } from './loginui.component';

describe('LoginuiComponent', () => {
  let component: LoginuiComponent;
  let fixture: ComponentFixture<LoginuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
