import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealStateListPage } from './real-state-list.page';

describe('RealStateListPage', () => {
  let component: RealStateListPage;
  let fixture: ComponentFixture<RealStateListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealStateListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealStateListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
