import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LisUnidadPage } from './lis-unidad.page';

const routes: Routes = [
  {
    path: '',
    component: LisUnidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LisUnidadPageRoutingModule {}
