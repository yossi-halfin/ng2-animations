import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {fadeInAnimation} from "../animations/fade-in.animations";

@Component({
  moduleId: module.id.toString(),
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '','style': 'display: block;' }
})
export class MainComponent implements OnInit {

  public users;
  public events;
  constructor(private __dataSrv:DataService) {
    this.users = [];
    this.events = [];
  }

  ngOnInit() {
    this.events = this.__dataSrv.getEvents();
    setTimeout(()=>{
      this.users = this.__dataSrv.getUsers();
    },100);

  }

}
