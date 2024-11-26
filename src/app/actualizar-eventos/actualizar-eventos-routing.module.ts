import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarEventosPage } from './actualizar-eventos.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarEventosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarEventosPageRoutingModule {}
