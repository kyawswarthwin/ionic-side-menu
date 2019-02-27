import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicPage } from './ionic.page';

describe('IonicPage', () => {
  let component: IonicPage;
  let fixture: ComponentFixture<IonicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
