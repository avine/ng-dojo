import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Increment } from 'src/app/actions/counter.actions';
import { selectCounter, State } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { CounterState } from 'src/app/reducers/counter.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter$: Observable<CounterState>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.counter$ = this.store.pipe(
      select(selectCounter)
    );
  }

  increment() {
    this.store.dispatch(new Increment());
  }
}
