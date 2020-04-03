import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { APP_CONFIG } from '../../../materials/AppConfig';
import { IAppConfig } from '../../../materials/IAppConfig';
import { IResponse } from '../../../shared/service/IResponse';


@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  constructor(private http: HttpClient,
              @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  addProduct(imageUrl: File, product: any) {
    // console.log(imageUrl);
    // console.log(product);
    const formData = new FormData();

    formData.append('file', imageUrl, imageUrl.name);
    formData.append('productName', product.productName);
    formData.append('category', product.category);
    formData.append('description', product.description);
    formData.append('price', product.price);

    // console.log(formData);
    return this.http.post<IResponse>(this.appConfig.apiEndPoint + '/product', formData);
  }

  getProductList() {
    return this.http.get<IResponse>(this.appConfig.apiEndPoint + '/product');
  }

}
