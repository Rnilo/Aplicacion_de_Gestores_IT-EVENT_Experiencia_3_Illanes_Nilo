import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogoInicioPageRoutingModule } from './logo-inicio-routing.module';

import { LogoInicioPage } from './logo-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogoInicioPageRoutingModule
  ],
  declarations: [LogoInicioPage]
})
export class LogoInicioPageModule {}
