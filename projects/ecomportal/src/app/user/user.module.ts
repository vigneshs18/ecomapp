import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPayPalModule  } from 'ngx-paypal';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialsModule } from '../materials/materials.module';
import { ProductModule } from './product/product.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { CartModule } from './cart/cart.module';
import { PaymentComponent } from './payment/payment.component';
import { OrderModule } from './order/order.module';


@NgModule({
  declarations: [
    UserDashboardComponent,
    ProfileComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    WishlistModule,
    CartModule,
    OrderModule,
    UserRoutingModule,
    MaterialsModule,
    NgxPayPalModule
  ]
})
export class UserModule { }
