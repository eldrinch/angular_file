import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  titulo = 'CONTADOR';
  valor = 0;
  //definindo um metodo
  increment() {
    this.valor++;
  }
}
