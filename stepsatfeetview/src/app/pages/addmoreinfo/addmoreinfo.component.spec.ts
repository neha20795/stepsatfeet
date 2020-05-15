import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmoreinfoComponent } from './addmoreinfo.component';

describe('AddmoreinfoComponent', () => {
  let component: AddmoreinfoComponent;
  let fixture: ComponentFixture<AddmoreinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmoreinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmoreinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
