import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleQrPageRoutingModule } from './detalle-qr-routing.module';

import { DetalleQrPage } from './detalle-qr.page';

import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    DetalleQrPageRoutingModule
  ],
  declarations: [DetalleQrPage]
})
export class DetalleQrPageModule {}
