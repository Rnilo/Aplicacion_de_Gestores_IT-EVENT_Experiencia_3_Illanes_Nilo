import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamaraQrPageRoutingModule } from './camara-qr-routing.module';

import { CamaraQrPage } from './camara-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamaraQrPageRoutingModule
  ],
  declarations: [CamaraQrPage]
})
export class CamaraQrPageModule {}
