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
      complaints: '',
      conditions: [
        {
          condition: '',
          date: ''
        }
      ],
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

  addMedication() {
    this.patientData.value.medicalHistory.medications.push({name:'',dose:'',frequency:''});
  }

  removeMedication(index) {
    this.patientData.value.medicalHistory.medications.splice(index, 1);
  }

  addCondition() {
    this.patientData.value.medicalHistory.conditions.push({condition:'',date:''});
  }

  removeCondition(index) {
    this.patientData.value.medicalHistory.conditions.splice(index, 1);
  }

  submitPatientData() {
    console.log('http post');
    console.log(this.patientData.value);
  }
  
}
