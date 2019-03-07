/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GateFindComponent } from './gateFind.component';

describe('GateFindComponent', () => {
  let component: GateFindComponent;
  let fixture: ComponentFixture<GateFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GateFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GateFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
