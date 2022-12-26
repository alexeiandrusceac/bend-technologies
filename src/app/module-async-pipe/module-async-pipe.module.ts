import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModuleAsyncPipeRoutingModule} from './module-async-pipe-routing.module';
import {AreasComponent} from './components/areas/areas.component'
import {AreaComponent} from './components/area/area.component'
import {ThingComponent} from './components/thing/thing.component'
import {SharedModule} from '../shared/shared.module'
import {NgPipesModule} from 'ngx-pipes'

@NgModule({

  imports: [
    CommonModule,
    SharedModule,
    ModuleAsyncPipeRoutingModule,
    NgPipesModule
  ],
  declarations: [AreasComponent, AreaComponent, ThingComponent]
})
export class ModuleAsyncPipeModule {
}
