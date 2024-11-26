import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleQrPage } from './detalle-qr.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleQrPageRoutingModule {}
