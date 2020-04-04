import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialsModule } from '../materials/materials.module';
import { ProductModule } from './product/product.module';


@NgModule({
  declarations: [
    UserDashboardComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    UserRoutingModule,
    MaterialsModule
  ]
})
export class UserModule { }
