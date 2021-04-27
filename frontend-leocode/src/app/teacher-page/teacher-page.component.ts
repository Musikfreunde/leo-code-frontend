import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.scss']
})
export class TeacherPageComponent implements OnInit {

  isDisplay = true;

  toggleDisplay(): void {
    this.isDisplay = !this.isDisplay;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
