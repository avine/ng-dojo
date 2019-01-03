import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodosService } from './services/todos.service';
import { Todo } from './models/todo.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todos-subject',
  templateUrl: './todos-subject.component.html',
  styleUrls: ['./todos-subject.component.scss']
})
export class TodosSubjectComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];

  subscription: Subscription;

  constructor(public todosService: TodosService) {
  }

  ngOnInit() {
    this.subscription = this.todosService.todos$.subscribe(todos => this.todos = todos);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addTodo() {
    this.todosService.add({
      id: 2,
      item: 'Hello',
      done: true
    });
  }
}
