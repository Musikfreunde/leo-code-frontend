import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  isGuest = false;
  isTeacher = false;
  isStudent = false;

  constructor(public router: Router) {
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
    this.router.navigateByUrl('/');
  }

}
