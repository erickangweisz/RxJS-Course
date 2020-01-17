import { Component, OnInit } from '@angular/core';
import { pipe, of, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-map-filter',
  templateUrl: './map-filter.component.html',
  styleUrls: ['./map-filter.component.sass']
})
export class MapFilterComponent implements OnInit {
  title: string;
  numbers: Observable<number>;

  constructor() {
    this.title = 'Operators: map and filter';
    this.numbers = of(1, 2, 3, 4, 5, 6);
  }

  ngOnInit() {
    this.squared();
  }

  squared() {
    const squaredNumers = pipe(
      filter((n: number) => this._getPeers(n)),
      map(n => n * n)
    );

    const square = squaredNumers(this.numbers);
    square.subscribe(result => console.log('squaredNumbers result:', result));
  }

  _getPeers(n: number): boolean {
    return n % 2 === 0;
  }
}
