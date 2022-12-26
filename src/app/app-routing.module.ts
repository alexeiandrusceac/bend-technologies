import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ModuleSubscribeModule} from './module-subscribe/module-subscribe.module'
import {AppComponent} from './app.component'
import {ModuleAsyncPipeModule} from './module-async-pipe/module-async-pipe.module'

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'module-subscribe', loadChildren: () => ModuleSubscribeModule},
  {path: 'module-async', loadChildren: () => ModuleAsyncPipeModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
