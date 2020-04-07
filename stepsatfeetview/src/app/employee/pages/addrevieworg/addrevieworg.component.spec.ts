import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrevieworgComponent } from './addrevieworg.component';

describe('AddrevieworgComponent', () => {
  let component: AddrevieworgComponent;
  let fixture: ComponentFixture<AddrevieworgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrevieworgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrevieworgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
