import { Component } from '@angular/core';
import { Exercise } from './exercise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cronometro';
  config: boolean = false;
  exercises: Exercise[] = [
    {
      name: 'Abdominal',
      duration: 30,
      repetitions: 3,
      preparation: 15,
      rest: 20,
    },
  ];
}
