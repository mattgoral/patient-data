import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PatientDataService } from './patient-data.service';
import { PatientDataFormComponent } from './patient-data-form/patient-data-form.component';
import { FormBasicInfoComponent } from './form-basic-info/form-basic-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientDataFormComponent,
    FormBasicInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [PatientDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
