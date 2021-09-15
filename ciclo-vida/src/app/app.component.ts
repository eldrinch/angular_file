import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ciclo-vida';

  ids: number[] = [];
  lastId: number = 0;
  label: string = '';

  delete(id: number) {
    this.ids.splice(this.ids.indexOf(id), 1);
  }

  add() {
    this.lastId++;
    this.ids.push(this.lastId);
  }
}
