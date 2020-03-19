import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterheadComponent } from './footerhead.component';

describe('FooterheadComponent', () => {
  let component: FooterheadComponent;
  let fixture: ComponentFixture<FooterheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
