import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { Router } from '@angular/router';

import { CartService } from './service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @ViewChild('cartTable', {static: false}) cartTable: MatTable<any>;
  userCart = [];
  displayedColumns: string[] = ['imageUrl', 'productName', 'quantity', 'price', 'actions'];
  constructor(private cartService: CartService,
              private router: Router) { }

  ngOnInit() {
    this.cartService.getUserCart()
      .subscribe(result => {
        result.data.forEach((product: any) => {
          product.UserCart[0].quantity = product.quantity;
          this.userCart.push(product.UserCart[0]);
        });
        this.cartTable.dataSource = this.userCart;
        this.cartTable.renderRows();
      });
  }

  delete(row: any) {
    console.log(row);
  }

  checkOut() {
    this.cartService.addProductForCheckOut(this.userCart);
    this.router.navigate(['/user/payment']);
  }

}
