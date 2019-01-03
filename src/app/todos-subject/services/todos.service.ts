import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodosService {
  private todos: Todo[] = [
    { id: 1, item: 'Chouette', done: false }
  ];

  todos$ = new BehaviorSubject<Todo[]>(this.todos);

  first$ = this.todos$.pipe(
    map(todos => todos[0])
  );

  constructor() { }

  add(todo: Todo) {
    this.todos = [todo, ...this.todos];
    this.todos$.next(this.todos);
  }

  remove(todo: Todo) {
    const index = this.todos.findIndex(t => t.id === todo.id);
    if (index !== -1) {
      const todos = [...this.todos];
      todos.splice(index, 1);
      this.todos = todos;
      this.todos$.next(this.todos);
    }
  }
}
