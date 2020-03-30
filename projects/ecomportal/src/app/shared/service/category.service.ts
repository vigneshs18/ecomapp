import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { APP_CONFIG } from '../../materials/AppConfig';
import { IAppConfig } from '../../materials/IAppConfig';
import { IResponse } from './IResponse';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient,
              @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  getCategories() {
    return this.http.get<IResponse>(this.appConfig.apiEndPoint + '/category');
  }

  postCategories(category: any) {
    return this.http.post<IResponse>(this.appConfig.apiEndPoint + '/category', category);
  }
}
