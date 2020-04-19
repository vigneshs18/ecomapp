import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { MaterialsModule } from '../../materials/materials.module';
import { OrderDetailsComponent } from './order-details/order-details.component';


@NgModule({
  declarations: [
    OrderComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
