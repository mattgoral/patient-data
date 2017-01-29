import { Injectable } from '@angular/core';

@Injectable()
export class PatientDataService {

  patientData = {
  	basicInfo: {
  		name: '',
  		dateOfBirth: ''

  	},
  	allergies: ''
  };

  updateData(data) {
  	this.patientData = data;
  	console.log('update patient data!');
  	console.log(this.patientData);
  }

}
