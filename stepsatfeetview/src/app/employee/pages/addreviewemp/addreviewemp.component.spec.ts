import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreviewempComponent } from './addreviewemp.component';

describe('AddreviewempComponent', () => {
  let component: AddreviewempComponent;
  let fixture: ComponentFixture<AddreviewempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddreviewempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreviewempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
