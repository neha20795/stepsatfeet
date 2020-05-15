import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateorgdetailComponent } from './updateorgdetail.component';

describe('UpdateorgdetailComponent', () => {
  let component: UpdateorgdetailComponent;
  let fixture: ComponentFixture<UpdateorgdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateorgdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateorgdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
