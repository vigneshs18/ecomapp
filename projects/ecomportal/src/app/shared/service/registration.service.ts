import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUserRegistration } from './IRegister';
import { APP_CONFIG } from '../../materials/AppConfig';
import { IAppConfig } from '../../materials/IAppConfig';
import { IResponse } from './IResponse';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient,
              @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  register(user: IUserRegistration) {
    return this.http.post<IResponse>(this.appConfig.apiEndPoint + '/user/registration', user);
  }

}
