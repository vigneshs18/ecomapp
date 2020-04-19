import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { APP_CONFIG } from '../../../materials/AppConfig';
import { IAppConfig } from '../../../materials/IAppConfig';
import { IResponse } from '../../../shared/service/IResponse';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  products = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient,
              @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  getUserCart() {
    return this.http.get<IResponse>(this.appConfig.apiEndPoint + '/cart');
  }

  addProductToCart(product: string) {
    return this.http.post<IResponse>(this.appConfig.apiEndPoint + '/cart', product );
  }

  addProductForCheckOut(product: any) {
    this.products.next(product);
  }

  getProductForCheckOut() {
    return this.products.asObservable();
  }
}
