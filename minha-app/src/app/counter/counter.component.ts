import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  titulo: string = 'Contador';
  valor: number = 0;
  //definindo um metodo
  increment() {
    this.valor++;
  }
}
