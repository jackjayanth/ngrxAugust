import { Store } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  customNumberAdd,
  changeName,
} from './../../state/counter.actions';
import { Component, OnInit } from '@angular/core';
import { CounterState } from 'src/app/state/counter.state';
import { getName } from 'src/app/state/counter.selectors';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent implements OnInit {
  customNumber: number = 0;
  name: string = 'Jay';
  constructor(private store: Store<{ counter: CounterState }>) {
    this.store.select(getName).subscribe((data) => {
      this.name = data;
    });
  }
  ngOnInit(): void {}
  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }

  customAdd() {
    console.log(this.customNumber);
    this.store.dispatch(customNumberAdd({ value: +this.customNumber }));
  }

  changeName() {
    this.store.dispatch(changeName());
  }
}
