import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { RealstateDetailPage } from './realstate-detail.page';
import { RealStateDetailRouteModule } from './real-state-detail.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealStateDetailRouteModule
  ],
  declarations: [RealstateDetailPage]
})
export class RealstateDetailPageModule { }
