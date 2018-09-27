import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersDetailPage } from './teachers-detail.page';

describe('TeachersDetailPage', () => {
  let component: TeachersDetailPage;
  let fixture: ComponentFixture<TeachersDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
