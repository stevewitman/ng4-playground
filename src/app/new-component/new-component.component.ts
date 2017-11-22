import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  template: `
    <h1>New Component</h1>
    <p>using inline template ... {{ myObj.gender }}</p>
    <ul>
      <li *ngFor="let team of myArr">{{ team }}</li>
    </ul>
    <div *ngIf="flag; then tmpl1 else tmpl2"></div>
    <ng-template #tmpl1>
      <button>Flag is true</button>
    </ng-template>
    <ng-template #tmpl2>
      <button>Flag is false</button>
    </ng-template>
  `,
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  flag = false;

  myObj = {
    gender: 'male',
    age: 99,
    location: 'earth'
  }

  myArr = ['Nuggets', 'Thunder', 'Warriors']

  constructor() { }

  ngOnInit() {
  }

}
