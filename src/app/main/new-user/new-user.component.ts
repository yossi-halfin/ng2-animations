import {Component, HostListener, OnInit} from '@angular/core';
import {slideInOutAnimation} from "../../animations/slide.animations";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '','style': 'display: block;' }

})
export class NewUserComponent implements OnInit {

  public form:FormGroup;

  constructor(public __fb:FormBuilder,private __dataSrv:DataService, private __router:Router) {
    this.form = this.__fb.group({
      'first_name': ['', Validators.required],
      'last_name': ['', Validators.required],
      'email': ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  cancel(event){
    this.redirect(event);

  }

  save(event){
    let user = this.form.getRawValue();
    this.__dataSrv.addUser(Object.assign({},user,{id:1}));
    this.redirect(event);
  }

  redirect(event){
    this.__router.navigate(['home']);
    event.preventDefault();
    event.stopPropagation();
  }
}
