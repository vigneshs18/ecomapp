import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatDividerModule,
  MatMenuModule,
  MatBadgeModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatCardModule,
  MatGridListModule
} from '@angular/material';

import { APP_CONFIG } from './AppConfig';
import { IAppConfig } from './IAppConfig';
import { environment } from '../../environments/environment';


const AppConfig: IAppConfig = {
  apiEndPoint: environment.apiEndPoint
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatDividerModule,
    MatMenuModule,
    MatBadgeModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig }
  ],
  exports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatDividerModule,
    MatMenuModule,
    MatBadgeModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class MaterialsModule { }
