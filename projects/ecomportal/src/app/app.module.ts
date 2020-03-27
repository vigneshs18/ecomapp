import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialsModule } from './materials/materials.module';
import { SharedModule } from './shared/shared.module';
import { CustomInterceptorService } from './shared/custom-interceptor/custom-interceptor.service';
import { ErrorHandlerService } from './shared/error-handler/error-handler.service';
import { RoutingModule } from './routing/routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule,
    SharedModule,
    RoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptorService, multi: true },
    { provide: ErrorHandler, useClass: ErrorHandlerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
