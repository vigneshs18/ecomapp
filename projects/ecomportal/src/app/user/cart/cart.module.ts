import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { MaterialsModule } from '../../materials/materials.module';


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    CartRoutingModule
  ]
})
export class CartModule { }
