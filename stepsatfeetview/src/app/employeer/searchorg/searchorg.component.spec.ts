import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchorgComponent } from './searchorg.component';

describe('SearchorgComponent', () => {
  let component: SearchorgComponent;
  let fixture: ComponentFixture<SearchorgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchorgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
