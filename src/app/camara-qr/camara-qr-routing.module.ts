import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamaraQrPage } from './camara-qr.page';

const routes: Routes = [
  {
    path: '',
    component: CamaraQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamaraQrPageRoutingModule {}
