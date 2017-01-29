import { Component, OnInit } from '@angular/core';
import { PatientDataService } from '../patient-data.service';

@Component({
  selector: 'app-patient-data-form',
  templateUrl: './patient-data-form.component.html',
  styleUrls: ['./patient-data-form.component.scss']
})
export class PatientDataFormComponent implements OnInit {

  patientData = {};
  constructor(public patientDataService: PatientDataService) {
  	this.patientDataService.patientData$.subscribe((patientData) => {
      this.patientData = patientData;
    });
  }

  submitForm() {
    this.patientDataService.submitPatientData();
  }

  ngOnInit() {}

}
