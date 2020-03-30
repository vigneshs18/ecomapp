import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { IUser } from './user';
import { environment } from '../../../environments/environment';
import { APP_CONFIG } from '../../materials/AppConfig';
import { IAppConfig } from '../../materials/IAppConfig';
import { IResponse } from './IResponse';
import { EncDecService } from '@ecom/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn = new BehaviorSubject<boolean>(false);
  role = new BehaviorSubject<string>('');

  constructor(private http: HttpClient,
              private encService: EncDecService,
              @Inject(APP_CONFIG) private appConfig: IAppConfig) {
                console.log(appConfig.apiEndPoint);
              }

  login(user: IUser) {
    return this.http.post<IResponse>(this.appConfig.apiEndPoint + '/user/login', user);
  }

  isLoggedIn(value?: boolean) {
    if (sessionStorage.getItem('role')) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
    return this.loggedIn.asObservable();
  }

  userRole(userRole?: string) {
    if (sessionStorage.getItem('role')) {
      const currentRole = this.encService.decrypt(sessionStorage.getItem('role'), '');
      this.role.next(currentRole);
    } else {
      this.role.next('');
    }
    return this.role.asObservable();
  }

}
