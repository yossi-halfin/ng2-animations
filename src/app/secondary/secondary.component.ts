import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../animations/fade-in.animations";

@Component({
  moduleId: module.id.toString(),
  templateUrl: 'secondary.component.html',
  styleUrls: ['secondary.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '','style': 'display: block;' }
})
export class SecondaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
