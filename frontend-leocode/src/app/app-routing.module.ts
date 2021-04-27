import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {StudentPageComponent} from './student-page/student-page.component';
import {TeacherPageComponent} from './teacher-page/teacher-page.component';
import {GuestPageComponent} from './guest-page/guest-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginPageComponent},
  {path: 'student', component: StudentPageComponent},
  {path: 'teacher', component: TeacherPageComponent},
  {path: 'guest', component: GuestPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
