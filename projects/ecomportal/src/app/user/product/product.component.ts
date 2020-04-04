import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { ProductService } from './service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any;
  category: string;
  productCount: number;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    this.route.queryParamMap.pipe(
      map(params => params.get('category'))
    ).subscribe((urlData) => {
      if (urlData != null) {
        this.category = urlData;
        this.productService.getProductByCategory(urlData).subscribe((result) => {
          this.products = result.data;
          this.productCount = result.count;
        });
      } else {
        this.category = 'All';
        this.productService.getAllProducts().subscribe((result) => {
          this.products = result.data;
          this.productCount = result.data.length;
        });
      }
    });
  }

}
