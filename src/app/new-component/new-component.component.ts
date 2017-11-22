import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  template: `
    <button (click)="myEvent($event)">Button</button>
    <div (mouseenter)="myMouseEvent($event)">Move mouse here</div>
  `,
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  myEvent(event) {
    console.log('EVENT:', event);
  }

  myMouseEvent(event) {
    console.log('EVENT:', "mouse entered div");
  }

  constructor() { }

  ngOnInit() {
  }

}
