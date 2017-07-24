import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {SecondaryComponent} from "./secondary/secondary.component";
import {NewUserComponent} from "./main/new-user/new-user.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: MainComponent,
    children:[
      {path: 'new', component: NewUserComponent}
    ]
  },
  {
    path: 'secondary',
    component: SecondaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
