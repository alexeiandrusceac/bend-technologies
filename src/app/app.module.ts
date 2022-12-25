import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {ModuleSubscribeModule} from './module-subscribe/module-subscribe.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModuleSubscribeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
