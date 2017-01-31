import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PatientDataService {

  patientDataTemplate = {
    basicInfo: {
      name: {
        firstName: '',
        lastName: ''
      },
      dateOfBirth: '',
      sex: '',
      address: {
        street: '',
        apt: '',
        city: '',
        state: '',
        zip: ''
      },
      phone: '',
      email: '',
      emergency: {
        name: '',
        relation: '',
        contact: ''
      }
    },
    medicalHistory: {
      medications: [
        {
          name: '',
          dose: '',
          frequency: ''
        }
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
