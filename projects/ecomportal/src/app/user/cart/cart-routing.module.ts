import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart.component';
import { AuthGuard } from '../../shared/guard/auth.guard';
import { UserGuard } from '../guard/user.guard';


const routes: Routes = [
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard, UserGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
