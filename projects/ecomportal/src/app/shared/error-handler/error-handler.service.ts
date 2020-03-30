import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

import { APP_CONFIG } from '../../materials/AppConfig';
import { IAppConfig } from '../../materials/IAppConfig';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: any): void {
    if (error != null || error !== '') {
      const http = this.injector.get(HttpClient);
      const appConfig = this.injector.get(APP_CONFIG);
      const snackbar = this.injector.get(MatSnackBar);
      const errorMessage = JSON.stringify(error.message);
      http.post(appConfig.apiEndPoint + '/errorLog', { error: errorMessage }).subscribe((result) => {
        snackbar.open('Some problem in performing this operation, Please try again', 'ErrorLog', {
          duration: 2000
        });
      });
    }
  }
}
