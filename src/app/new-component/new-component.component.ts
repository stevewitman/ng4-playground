import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-new-component',
  template: `
    <p> {{ myCars }} </p>
  `,
  styles: [`

  `]
})
export class NewComponentComponent implements OnInit {

  myCars: String = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(this.dataService.cars);

    this.myCars = this.dataService.myData();

  }

}
