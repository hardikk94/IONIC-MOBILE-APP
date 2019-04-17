import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealstateDetailPage } from './realstate-detail.page';

describe('RealstateDetailPage', () => {
  let component: RealstateDetailPage;
  let fixture: ComponentFixture<RealstateDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealstateDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealstateDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
