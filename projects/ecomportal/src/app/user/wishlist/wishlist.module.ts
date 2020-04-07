import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist.component';
import { MaterialsModule } from '../../materials/materials.module';


@NgModule({
  declarations: [WishlistComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    WishlistRoutingModule
  ]
})
export class WishlistModule { }
