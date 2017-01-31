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
          name: 'advil',
          dose: '',
          frequency: ''
        }
      ]
    }
  };

  private patientData = new BehaviorSubject(this.patientDataTemplate);
  patientData$ = this.patientData.asObservable();

  addMedication() {
    console.log('add med service');
    this.patientData.value.medicalHistory.medications.push({name:'',dose:'',frequency:''});
  }

  removeMedication(index) {
    this.patientData.value.medicalHistory.medications.splice(index, 1);
  }

  submitPatientData() {
    console.log('http post');
    console.log(this.patientData.value);
  }
  
}
