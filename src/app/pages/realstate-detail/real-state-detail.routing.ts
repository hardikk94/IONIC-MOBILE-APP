import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RealstateDetailPage } from './realstate-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RealstateDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealStateDetailRouteModule { }
