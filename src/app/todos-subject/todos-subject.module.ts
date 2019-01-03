import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosSubjectComponent } from './todos-subject.component';
import { TodosService } from './services/todos.service';

@NgModule({
  declarations: [
    TodosSubjectComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TodosService
  ],
  exports: [
    TodosSubjectComponent
  ]
})
export class TodosSubjectModule { }
