import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter } from 'src/app/state/counter.selectors';
import { CounterState } from 'src/app/state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  counter: number = 0;
  counter$: Observable<number>;
  constructor(private store: Store<{ counter: CounterState }>) {
    // this.store.select('counter').subscribe((data) => {
    //   this.counter = data.counter;
    // });
    this.counter$ = this.store.select(getCounter);
  }
}
