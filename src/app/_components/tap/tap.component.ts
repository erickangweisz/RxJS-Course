import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.sass']
})
export class TapComponent implements OnInit {
  title: string;

  constructor() {
    this.title = 'Tap';
  }

  ngOnInit() {
    this._initClicksWithTap();
  }

  _initClicksWithTap() {
    const clicks = fromEvent(document, 'click');
    const positions = clicks.pipe(
      tap(
        evt => console.log(`[tap] Processing: ${evt}`),
        err => console.error('[tap] Error:', err),
        ()  => console.log('[tap] Completed:')
      )
    )
    positions.subscribe(pos => console.log('[tap] Subscribe:', pos));
  }
}
