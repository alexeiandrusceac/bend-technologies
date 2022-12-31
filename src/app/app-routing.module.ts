import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleSubscribeModule } from './module-subscribe/module-subscribe.module';
import { ModuleAsyncPipeModule } from './module-async-pipe/module-async-pipe.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'module-subscribe', loadChildren: () => ModuleSubscribeModule },
  { path: 'module-async', loadChildren: () => ModuleAsyncPipeModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
