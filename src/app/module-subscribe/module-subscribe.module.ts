import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreasComponent } from './areas/areas.component';
import { AreaComponent } from './area/area.component';
import { ThingComponent } from './thing/thing.component';
import {FormsModule} from '@angular/forms'
import {ModuleSubscribeRoutingModule} from './module-subscribe-routing.module'
import {NgPipesModule} from 'ngx-pipes'
import {GenerateChildPipe} from '../generated-child.pipe'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModuleSubscribeRoutingModule,
        NgPipesModule
    ],
  declarations: [AreasComponent, AreaComponent, ThingComponent, GenerateChildPipe]
})
export class ModuleSubscribeModule {

}
