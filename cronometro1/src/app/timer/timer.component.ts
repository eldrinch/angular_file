import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnDestroy {
  interval!: NodeJS.Timeout;

  // criado o servico vamos a criar um construtor, e colocar publico para poder usar dentro do template
  constructor(public ts: TimerService) {}

  ngOnInit(): void {
    this.ts.restart();
  }

  //A função restart(),  next(), getTimeOfCurrentPhase() foi transferida para o serviço

  formatPhase(phase: number) {
    switch (phase) {
      case 0:
        return 'Preparação';
      case 1:
        return 'Exercicio';
      case 2:
        return 'Descanso';
    }
  }

  //(1)retiramos a função e agora usamos o pipe para formatar diretamente no html
  // formatTimeLeft(time: number) {
  //   return (time / 10).toString();
  // }

  start() {
    if (!this.interval) {
      let lastTime = Date.now();
      this.interval = setInterval(() => {
        //vamos transportar esta logica para o serviço
        // if (this.ts.timeLeft > 0) {
        //   this.ts.timeLeft--;
        // } else {
        //   this.next();
        // }
      let currentTime = Date.now();
      let ellapsedTime = currentTime - lastTime;
      lastTime =currentTime;

        this.ts.decrementTimeLeft(ellapsedTime);
      }, 100);
    }
  }

  pause() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  ngOnDestroy(): void {
    this.pause();
    throw new Error('Method not implemented.');
  }

  restart(){
    this.ts.restart();
  }

  next(){
    this.ts.next();
  }

}
