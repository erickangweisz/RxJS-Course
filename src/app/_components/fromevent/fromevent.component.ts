import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.sass']
})
export class FromeventComponent implements OnInit {
  title: string;
  element: HTMLElement;

  constructor() {
    this.title = 'FromEvent';
  }

  ngOnInit() {
    this._initMouseEvent();
  }

  _initMouseEvent(): void {
    this.element = document.getElementById('element');
    const mouseEvent = fromEvent(this.element, 'mousemove');
    mouseEvent.subscribe((event: MouseEvent) => {
      console.log(`coords -> x: ${event.clientX}, y: ${event.clientY}`);
    });
  }
}
