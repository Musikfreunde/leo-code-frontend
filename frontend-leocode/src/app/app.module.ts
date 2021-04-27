import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './material-module';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { TeacherPageComponent } from './teacher-page/teacher-page.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { GuestPageComponent } from './guest-page/guest-page.component';
import { UploadComponent } from './teacher-page/upload/upload.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReportComponent } from './student-page/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TeacherPageComponent,
    StudentPageComponent,
    GuestPageComponent,
    UploadComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMatFileInputModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
