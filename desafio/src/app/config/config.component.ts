import { Component, Input } from '@angular/core';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
})
export class ConfigComponent {
  @Input() exercices: Exercise[] = [];

  exercise: Exercise = {
    name: '',
    duration: 30,
    repetitions: 3,
    preparation: 15,
    rest: 30,
  };

  constructor() {}

  add() {
    this.exercices.push(this.exercise);
    this.exercise = { ...this.exercise, name: '' };
  }

  delete(i: number) {
    this.exercices.splice(i, 1);
  }
}
