/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PatientDataService } from './patient-data.service';

describe('PatientDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientDataService]
    });
  });

  it('should ...', inject([PatientDataService], (service: PatientDataService) => {
    expect(service).toBeTruthy();
  }));
});
