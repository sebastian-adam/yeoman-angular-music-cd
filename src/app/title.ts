import {Component} from '@angular/core';

@Component({
  selector: 'TitleComponent',
  inputs: ['album'],
  template: require('./title.html')
})
export class Title {}
