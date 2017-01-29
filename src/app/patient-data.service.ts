import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PatientDataService {

  patientDataTemplate = {
    basicInfo: {
      name: 'Matt',
      dateOfBirth: ''
    },
    medicalHistory: {
      allergies: [
        'tylenol'
      ]
    }
  };

  private patientData = new BehaviorSubject(this.patientDataTemplate);
  patientData$ = this.patientData.asObservable();

  submitPatientData() {
    console.log('http post');
    console.log(this.patientData.value);
  }
  
}
