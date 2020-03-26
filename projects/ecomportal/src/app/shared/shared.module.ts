import { NgModule } from '@angular/core';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialsModule } from '../materials/materials.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    MainNavComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    SharedRoutingModule,
    MaterialsModule
  ],
  exports: [
    MainNavComponent,
    LoginComponent
  ]
})
export class SharedModule { }
