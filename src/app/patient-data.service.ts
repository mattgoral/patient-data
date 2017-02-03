import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PatientDataService {

  constructor (private http: Http) {}

  apiEndpoint = "http://www.mattgoral.com/patient-data";

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
      },
      race: [
        {
          race: 'White',
          isRace: false
        },
        {
          race: 'Asian',
          isRace: false
        },
        {
          race: 'African American',
          isRace: false
        },
        {
          race: 'Native American',
          isRace: false
        }
      ]
    },
    medicalHistory: {
      complaints: '',
      conditions: [
        {
          condition: '',
          date: ''
        }
      ],
      isSmoker: '',
      familyHistory: [
        {
          disease: 'Hypertension',
          hasHistory: false
        },
        {
          disease: 'Diabetes',
          hasHistory: false
        },
        {
          disease: 'High Cholesterol',
          hasHistory: false
        },
        {
          disease: 'Heart Disease',
          hasHistory: false
        },
        {
          disease: 'Migranes',
          hasHistory: false
        },
        {
          disease: 'Seizures',
          hasHistory: false
        },
        {
          disease: 'Muscular Dystrophy',
          hasHistory: false
        },
        {
          disease: 'Strokes',
          hasHistory: false
        },
        {
          disease: "Parkinson's Disease",
          hasHistory: false
        },
        {
          disease: "Alzheimer's Disease",
          hasHistory: false
        },
        {
          disease: 'Neruopathy',
          hasHistory: false
        },
        {
          disease: 'Multiple Sclerosis',
          hasHistory: false
        }
      ],
      medications: [
        {
          name: '',
          dose: '',
          frequency: ''
        }
      ]
    },
    consent: false
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
    let requestBody = JSON.stringify(this.patientData.value);
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.post(this.apiEndpoint, requestBody, headers)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log('Error because the endpoint is fake!');
      });
  }
  
}
