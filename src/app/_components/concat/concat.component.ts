import { Component, OnInit } from '@angular/core';
import { concat, interval, range } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.sass']
})
export class ConcatComponent implements OnInit {
  title: string;

  constructor() {
    this.title = 'Concat';
  }

  ngOnInit() {
    const timer = interval(1000).pipe(take(4));
    const rango = range(1, 10);

    const result = concat(timer, rango);

    result.subscribe(x => console.log('[concat]', x));
  }

}
