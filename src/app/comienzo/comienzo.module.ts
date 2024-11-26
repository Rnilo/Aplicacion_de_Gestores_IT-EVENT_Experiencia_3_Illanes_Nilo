import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComienzoPageRoutingModule } from './comienzo-routing.module';

import { ComienzoPage } from './comienzo.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComienzoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ComienzoPage]
})
export class ComienzoPageModule {}
