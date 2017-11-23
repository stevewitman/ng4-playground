import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  template: `
    <h1 [class]="titleClass">Hello</h1>
    <h2 [class.redTitle]="subtitleClass">Here</h2>
    <p [ngClass]="paragraphClasses">Paragraph</p>
  `,
  styles: [`
  h1 {
    text-decoration: underline;
  }
  .redTitle {
    color: red;
  }
  .smallText {
    font-size: 0.5em;
  }
 
  `]
})
export class NewComponentComponent implements OnInit {

  titleClass = "redTitle";
  subtitleClass = true;
  paragraphClasses = {
    'redTitle': true,
    'smallText': true
  }
  constructor() { }

  ngOnInit() {
  }

}
