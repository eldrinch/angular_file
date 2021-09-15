import { Component, NgModule } from '@angular/core';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  text: string = 'x';
  newTask: string = '';

  tasks: TodoItem[] = [
    { description: 'Arrumar a cama', done: true },
    { description: 'Fazer o trabalho pratico do Bootcamp', done: false },
  ];

  // addTask(description: string) {
  //   this.tasks.push({
  //     description: description,
  //     done: false,
  //   });
  // }

  addTask() {
    this.tasks.push({
      description: this.newTask,
      done: false,
    });
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }
}
