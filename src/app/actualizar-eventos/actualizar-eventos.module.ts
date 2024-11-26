import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarEventosPageRoutingModule } from './actualizar-eventos-routing.module';

import { ActualizarEventosPage } from './actualizar-eventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarEventosPageRoutingModule
  ],
  declarations: [ActualizarEventosPage]
})
export class ActualizarEventosPageModule {}
