import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasComponent } from './components/areas/areas.component';

const routes: Routes = [{ path: '', component: AreasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleAsyncPipeRoutingModule {}
