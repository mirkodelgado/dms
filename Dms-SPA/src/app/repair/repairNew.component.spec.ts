/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RepairNewComponent } from './repairNew.component';

describe('RepairNewComponent', () => {
  let component: RepairNewComponent;
  let fixture: ComponentFixture<RepairNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
