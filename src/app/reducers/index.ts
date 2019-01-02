import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { counterReducer, getCounter } from './counter.reducer';

export interface State {
  counter: number;
  // user: ...
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer
  // user: userReducer...
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

const c = (state: State) => state.counter;

export const selectCounter = createSelector(c, getCounter);

// export const selectCounter = (state: State) => {
//   return getCounter(state.counter);
// };
