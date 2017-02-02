import { Component, OnInit } from '@angular/core';
import { PatientDataService } from '../patient-data.service';

@Component({
  selector: 'app-form-consent',
  templateUrl: './form-consent.component.html',
  styleUrls: ['./form-consent.component.scss']
})
export class FormConsentComponent implements OnInit {
  patientData = {};
  constructor(public patientDataService: PatientDataService) {
  	this.patientDataService.patientData$.subscribe((patientData) => {
      this.patientData = patientData;
    });
  }

  ngOnInit() {}

}
