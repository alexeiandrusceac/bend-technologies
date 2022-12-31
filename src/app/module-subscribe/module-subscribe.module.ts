import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreasComponent } from './components/areas/areas.component';
import { AreaComponent } from './components/area/area.component';
import { ThingComponent } from './components/thing/thing.component';
import { ModuleSubscribeRoutingModule } from './module-subscribe-routing.module';
import { NgPipesModule } from 'ngx-pipes';
import { SharedModule } from '../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [CommonModule, SharedModule, ModuleSubscribeRoutingModule, NgPipesModule, MatProgressSpinnerModule],
  declarations: [AreasComponent, AreaComponent, ThingComponent],
})
export class ModuleSubscribeModule {}
