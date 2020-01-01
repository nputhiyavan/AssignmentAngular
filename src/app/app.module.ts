import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Assignment2Component } from "./assignment2/assignment2.Component";
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment2Component,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
