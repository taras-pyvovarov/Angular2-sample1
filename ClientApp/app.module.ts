//Root module, AppModule by convension.
//Angular module class describes how the application parts fit together.

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Decorator function. Properties contain metadata about module.
@NgModule({
  imports:      [ BrowserModule ],
  //providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }