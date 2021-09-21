import { Component, Inject } from "@angular/core";
import { TodoListService } from "../todoList.service";

import { TEMA } from "../app.module";

@Component({
  selector: "app-c2",
  templateUrl: "./c2.component.html",
  styles: [],
  providers: [TodoListService],
})
export class C2Component {
  todoListService: TodoListService;

  constructor(todoListService: TodoListService, @Inject(TEMA) public tema: string) {
    this.todoListService = todoListService;
  }
}
