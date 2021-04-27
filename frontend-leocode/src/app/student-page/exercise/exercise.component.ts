import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})

export class ExerciseComponent implements OnInit {
  exercisesList: Exercise[] = [new Exercise('Example 01: Java for beginners', 'Benjo', 'Simple Java program'),
    new Exercise('Example 02: Java Calculator', 'Boki', 'Calculator'),
    new Exercise('Example 03: Java CoffeeSlotMachine', 'David', 'CoffeeSlotMachine')
  ];
  nameList: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.nameList = this.exercisesList.map(e => e.name);
  }

  findExercise(name: string): Exercise{
    return this.exercisesList.find(e => e.name === name) as Exercise;
  }
}
export class Exercise{
  constructor(public name: string, public author: string, public description: string) {
  }
}
