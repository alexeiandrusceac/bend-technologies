import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {ModuleSubscribeModule} from './module-subscribe/module-subscribe.module'
import {ModuleAsyncPipeModule} from './module-async-pipe/module-async-pipe.module'
import {GenerateChildPipe} from './generated-child.pipe'
import {SharedModule} from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ModuleSubscribeModule,
    ModuleAsyncPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
