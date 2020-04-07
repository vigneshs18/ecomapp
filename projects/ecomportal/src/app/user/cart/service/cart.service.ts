import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { APP_CONFIG } from '../../../materials/AppConfig';
import { IAppConfig } from '../../../materials/IAppConfig';
import { IResponse } from '../../../shared/service/IResponse';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient,
              @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  getUserCart() {
    return this.http.get<IResponse>(this.appConfig.apiEndPoint + '/cart');
  }

  addProductToCart(productId: string) {
    return this.http.post<IResponse>(this.appConfig.apiEndPoint + '/cart', { productId });
  }
}
