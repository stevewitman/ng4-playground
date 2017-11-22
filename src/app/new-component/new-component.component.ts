import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  template: `
    <h1>New Component</h1>
    <img [src]="img1">
    <button [disabled]="buttonStatus">Button</button>
  `,
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  img1 = "http://lorempixel.com/400/200/";

  buttonStatus = false;

  constructor() { }

  ngOnInit() {
  }

}
