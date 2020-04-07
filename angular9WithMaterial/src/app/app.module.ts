import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ChartModule }     from 'angular2-highcharts'; 
import { platformBrowserDynamic }  from '@angular/platform-browser-dynamic';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import * as $ from 'jquery';
import * as bootstrap from "bootstrap";
import * as highcharts from 'highcharts';
import { EnrollmentModule } from './modules/enrollment/enrollment.module';
import { AdministrationModule } from './modules/administration/administration.module';
import { FinanceModule } from './modules/finance/finance.module';
import { AcademicsModule } from './modules/academics/academics.module';
import { ReportsModule } from './modules/reports/reports.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from '../app/material-module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {CUSTOM_ELEMENTS_SCHEMA } from  '@angular/core';
import { RndtestingComponent } from './component/rndtesting/rndtesting.component'
import { RndtestingModule } from './modules/rndtesting/rndtesting.module';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import {MatNativeDateModule} from '@angular/material/core';

//declare var require:any;
// export function highchartsFactory() {
//   return require('highcharts');
// }
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent    
  ],
  imports: [    
    //ChartModule.forRoot(require('highcharts')),
    ChartModule,
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DashboardModule,
    EnrollmentModule,
    FinanceModule,
    AcademicsModule,
    ReportsModule,
    BrowserAnimationsModule,
    AdministrationModule,
    RndtestingModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatNativeDateModule
    
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [    
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' }}     
  ]
})
export class AppModule { }
//platformBrowserDynamic().bootstrapModule(AppModule);