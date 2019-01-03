import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { TodosSubjectComponent } from './todos-subject/todos-subject.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'todos', component: TodosSubjectComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
