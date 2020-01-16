import { Component, OnInit } from '@angular/core';
import { interval, timer, Observable } from 'rxjs';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.sass']
})
export class IntervalTimerComponent implements OnInit {
  title: string;
  counter: Observable<number>;

  constructor() {
    this.title = 'Interval-Timer';
  }

  ngOnInit() {}

  initCounterWithInterval(): void {
    this.counter = interval(1000);

    this.counter.subscribe((n) => {
      console.log(`called each ${n} seconds`);
    });
  }

  initTimer(): void {
    const miliseconds = 2000;
    this.counter = timer(miliseconds);

    this.counter.subscribe((n) => {
      console.log(`triggered in ${miliseconds / 1000} seconds`);
    });
  }
}
