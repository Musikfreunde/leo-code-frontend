import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit {
  isDisplay = true;

  toggleDisplay(): void {
    this.isDisplay = !this.isDisplay;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
