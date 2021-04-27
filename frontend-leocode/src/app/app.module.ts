import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { TeacherPageComponent } from './teacher-page/teacher-page.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { GuestPageComponent } from './guest-page/guest-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TeacherPageComponent,
    StudentPageComponent,
    GuestPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
