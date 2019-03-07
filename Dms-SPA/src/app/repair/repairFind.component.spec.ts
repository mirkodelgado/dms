/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RepairFindComponent } from './repairFind.component';

describe('RepairFindComponent', () => {
  let component: RepairFindComponent;
  let fixture: ComponentFixture<RepairFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
