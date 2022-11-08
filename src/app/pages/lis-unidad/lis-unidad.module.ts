import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LisUnidadPageRoutingModule } from './lis-unidad-routing.module';

import { LisUnidadPage } from './lis-unidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LisUnidadPageRoutingModule
  ],
  declarations: [LisUnidadPage]
})
export class LisUnidadPageModule {}
