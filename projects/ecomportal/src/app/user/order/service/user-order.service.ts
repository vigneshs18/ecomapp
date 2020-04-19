import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { APP_CONFIG } from '../../../materials/AppConfig';
import { IAppConfig } from '../../../materials/IAppConfig';
import { IResponse } from '../../../shared/service/IResponse';


@Injectable({
  providedIn: 'root'
})
export class UserOrderService {

  constructor(private http: HttpClient,
              @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  placeOrder(order: any) {
    return this.http.post<IResponse>(this.appConfig.apiEndPoint + '/order', order);
  }

}
