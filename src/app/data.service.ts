import { Injectable } from '@angular/core';
import {Users} from "./users";

@Injectable()
export class DataService {

  public events;
  constructor() {
    this.events = [];
  }

  getUsers(){
    return Users.data;
  }

  addUser(user){
    Users.data.push(user);
  }

  regEvent(e){
    this.events.push(e);
  }

  getEvents(){
    return this.events;
  }



}
