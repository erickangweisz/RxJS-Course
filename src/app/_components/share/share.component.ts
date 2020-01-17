import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { tap, mapTo, share } from 'rxjs/operators';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.sass']
})
export class ShareComponent implements OnInit {
  title: string;

  constructor() {
    this.title = 'Operators: Share'
  }

  ngOnInit() {
    this._initTimer();
  }

  _initTimer() {
    const time = timer(1000);
    const obsv = time.pipe(
      tap(() => console.log('[share] tap:', 'tap on!')),
      mapTo('[share] end obsv')
    );

    const subs_1 = obsv.subscribe(val => console.log('[share] subs_1:', val));
    const subs_2 = obsv.subscribe(val => console.log('[share] subs_2:', val));

    const shareObsv = obsv.pipe(share());

    console.log('[share] share ON!');
    
    const subs_3 = shareObsv.subscribe(val => console.log('[share] subs_3:', val));
    const subs_4 = shareObsv.subscribe(val => console.log('[share] subs_4:', val));
  }
}
