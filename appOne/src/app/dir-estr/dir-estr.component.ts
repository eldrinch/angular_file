import { Component } from '@angular/core';
import { TodoItem } from './todoItem';

@Component({
  selector: 'dir-estr',
  templateUrl: './dir-estr.component.html',
  styleUrls: ['./dir-estr.component.css'],
})
export class DirEstrComponent {
  exibir: boolean = true;
  text: string = '';
  newTask: string = '';

  toggleShow() {
    //invirtindo o valor que estava anteriormente com  a negação
    this.exibir = !this.exibir;
  }

  //todo list estruturado com uma interface todoItem

  tasks: TodoItem[] = [
    { description: 'Arummar a cama', done: false },
    { description: 'Fazer o trabalho pratico do bootcamp', done: true },
  ];
  //adicionando tarefa
  //  addTask(description: string) {
  addTask() {
    this.tasks.push({
      //description: description
      description: this.newTask,
      done: false,
    });
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }
}
