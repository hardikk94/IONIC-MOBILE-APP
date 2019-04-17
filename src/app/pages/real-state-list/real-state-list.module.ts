import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RealStateListPage } from './real-state-list.page';
import { RealStateRouteModule } from './real-state-list.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealStateRouteModule
  ],
  declarations: [RealStateListPage]
})
export class RealStateListPageModule { }
