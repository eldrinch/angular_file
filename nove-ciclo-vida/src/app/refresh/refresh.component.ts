import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css'],
})
export class RefreshComponent implements OnInit, OnDestroy {
  @Input() id: number = 0;
  //se der o erro: #Cannot find namespace 'NodeJS'.# adicionar np tsconfig.app.json "node" em "types"
  interval!: NodeJS.Timeout;

  constructor() {}

  ngOnInit(): void {
    //chamando uma função a cada 2000 milisegundos
    this.interval = setInterval(() => {
      console.log(`Component #${this.id} refresh`);
    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
