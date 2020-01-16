import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.sass']
})
export class ObserverComponent implements OnInit {
  title: string;
  observable: any;

  constructor() {
    this.title = 'Observer';
  }

  ngOnInit() {
    this._initObservable();
  }

  _initObservable(): void {
    this.observable = Observable.create((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
    });
  }

  rxjsFunc() {
    console.log('just before subscribe');
    this.observable.subscribe({
      next: nxt => console.log(`got value ${nxt}`),
      error: err => console.log(`something wrong occured: ${err}`),
      complete: () => console.log('done')
    });
    console.log('just after subscribe');
  }
}
