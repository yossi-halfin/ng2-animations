import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {SecondaryComponent} from './secondary/secondary.component';
import {DataService} from "./data.service";
import { NewUserComponent } from './main/new-user/new-user.component';
import {ReactiveFormsModule} from "@angular/forms";
import { RowComponent } from './main/row/row.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SecondaryComponent,
    NewUserComponent,
    RowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule {}
