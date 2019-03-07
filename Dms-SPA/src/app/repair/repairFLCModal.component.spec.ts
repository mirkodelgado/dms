/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RepairFLCModalComponent } from './repairFLCModal.component';

describe('RepairFLCModalComponent', () => {
  let component: RepairFLCModalComponent;
  let fixture: ComponentFixture<RepairFLCModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairFLCModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairFLCModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
