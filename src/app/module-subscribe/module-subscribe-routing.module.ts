import {RouterModule, Routes} from '@angular/router'
import {NgModule} from '@angular/core'
import {AreasComponent} from './areas/areas.component'

const routes: Routes = [
  {path: '', component: AreasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleSubscribeRoutingModule {

}
