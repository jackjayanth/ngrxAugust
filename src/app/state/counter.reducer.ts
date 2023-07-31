import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import {
  changeName,
  customNumberAdd,
  decrement,
  increment,
  reset,
} from './counter.actions';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customNumberAdd, (state, actions) => {
    return {
      ...state,
      counter: state.counter + actions.value,
    };
  }),
  on(changeName, (state) => {
    alert;
    return {
      ...state,
      name: state.name + ' name changed',
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
