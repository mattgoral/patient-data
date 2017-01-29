import { Component, OnInit } from '@angular/core';
import { PatientDataService } from '../patient-data.service';

@Component({
  selector: 'app-form-basic-info',
  templateUrl: './form-basic-info.component.html',
  styleUrls: ['./form-basic-info.component.scss']
})
export class FormBasicInfoComponent implements OnInit {
  patientData = {};
  constructor(public patientDataService: PatientDataService) {
  	this.patientDataService.patientData$.subscribe((patientData) => {
      this.patientData = patientData;
    });
  }

  ngOnInit() {}

}
