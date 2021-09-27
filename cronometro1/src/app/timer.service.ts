import { Injectable } from '@angular/core';
import { Exercise } from './exercise';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
// retiro o Input do exercises
  exercises: Exercise[] = [
    {
      name: 'Abdominal',
      duration: 30,
      repetitions: 3,
      preparation: 15,
      rest: 20,
    },
  ];
  currentExe: number = 0;
  currentRep: number = 0
  phase: number = 0;
  timeLeft: number = 0;
  //tiro o interval por que tem a ver mais com o ciclo de vida componente
  // interval!: NodeJS.Timeout;

  //
  ngOnInit(): void {
    this.restart();
  }

  restart() {
    this.currentExe = 0;
    this.currentRep = 0;
    this.phase = 0;
    // const ex = this.exercises[this.currentExe];
    this.timeLeft = this.getTimeOfCurrentPhase();
  }

//A funçao formatPhase phase vai ficar no componente
//A funçao start() e  pause() tem a ver com a função setInterval() e fica no componente ngOnDestroy(): vai ficar no componente
// esta funçao fica por que lida com os dados de nossa classe do service
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
decrementTimeLeft(ellapsedTimeMs){
  if(ellapsedTimeMs >= this.timeLeft){
    this.next();

  }else{
    this.timeLeft = this.timeLeft -ellapsedTimeMs
  }
  if (this.timeLeft > 0) {
    this.timeLeft--;
  } else {
    this.next();
  }
}

  //esta função é usada dentro do serviço por isso vai virar private
  private getTimeOfCurrentPhase() {
    const ex = this.exercises[this.currentExe];
    switch (this.phase) {
      case 0:
        return ex.preparation * 1000;
      case 1:
        return ex.duration * 1000;
      case 2:
        return ex.rest * 1000;
    }
  }
  add(exercise:Exercise){
    this.exercises.push(exercise);
  }

  delete(i:number){
    this.exercises.splice(i,1)
  }




}
