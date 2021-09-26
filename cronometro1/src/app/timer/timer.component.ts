import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnDestroy {
  
  @Input() exercises: Exercise[] = [];

  currentExe: number = 0;
  currentRep: number = 0
  phase: number = 0;
  timeLeft: number = 0;
  interval!: NodeJS.Timeout;

  ngOnInit(): void {
    this.restart();
  }

  restart() {
    this.currentExe = 0;
    this.currentRep = 0;
    this.phase = 0;
    const ex = this.exercises[this.currentExe];
    this.timeLeft = this.getTimeOfCurrentPhase();
  }

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

  formatTimeLeft(time: number) {
    return (time / 10).toString();
  }

  start() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.next();
        }
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

  next() {
    if (this.phase < 2) {
      this.phase++;
    } else {
      const ex = this.exercises[this.currentExe];
      if (this.currentRep < ex.repetitions - 1) {
        this.currentRep++;
        this.phase = 1;
      } else {
        if (this.currentExe < this.exercises.length - 1) {
          this.currentExe++;
          this.currentRep = 0;
          this.phase = 0;
        } else {
          return;
        }
      }
    }
    this.timeLeft = this.getTimeOfCurrentPhase();
  }

  getTimeOfCurrentPhase() {
    const ex = this.exercises[this.currentExe];
    switch (this.phase) {
      case 0:
        return ex.preparation * 10;
      case 1:
        return ex.duration * 10;
      case 2:
        return ex.rest * 10;
    }
  }
}
