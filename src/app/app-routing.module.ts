import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ModuleSubscribeModule} from './module-subscribe/module-subscribe.module'
import {AppComponent} from './app.component'

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'module-subscribe', loadChildren: () => ModuleSubscribeModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
