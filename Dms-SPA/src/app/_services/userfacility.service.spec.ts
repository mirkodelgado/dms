/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserfacilityService } from './userfacility.service';

describe('Service: Userfacility', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserfacilityService]
    });
  });

  it('should ...', inject([UserfacilityService], (service: UserfacilityService) => {
    expect(service).toBeTruthy();
  }));
});
