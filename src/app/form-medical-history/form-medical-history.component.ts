import { Component, OnInit } from '@angular/core';
import { PatientDataService } from '../patient-data.service';
import { NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-medical-history',
  templateUrl: './form-medical-history.component.html',
  styleUrls: ['./form-medical-history.component.scss']
})
export class FormMedicalHistoryComponent implements OnInit {
  patientData = {};
  constructor(public patientDataService: PatientDataService, config: NgbDatepickerConfig) {
  	this.patientDataService.patientData$.subscribe((patientData) => {
      this.patientData = patientData;
    });

    config.minDate = {year: 1900, month: 1, day: 1};
    config.maxDate = {year: new Date().getFullYear(), month: 12, day: 31};
  }

  ngOnInit() {}

}
