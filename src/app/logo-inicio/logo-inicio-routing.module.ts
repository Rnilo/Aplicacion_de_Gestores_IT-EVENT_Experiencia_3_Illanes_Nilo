import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoInicioPage } from './logo-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: LogoInicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogoInicioPageRoutingModule {}
