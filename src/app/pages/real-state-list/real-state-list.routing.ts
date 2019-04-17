import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RealStateListPage } from './real-state-list.page';

const routes: Routes = [
  {
    path: '',
    component: RealStateListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealStateRouteModule { }
