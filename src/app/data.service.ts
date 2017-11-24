import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = [
    'ford', 'checy', 'jeep'
  ]

  myData() {
    return 'some data'
  }

}
