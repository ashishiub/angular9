
import * as highcharts from 'highcharts';

import {  NgModule } from '@angular/core';
import {  CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';


import {  StudentService } from 'src/app/service/student.service';

import {  platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import {  FormsModule } from '@angular/forms';

import {  StudentDashboardComponent } from './../../component/dashboard/student-dashboard/student-dashboard.component'
import {  FinanceDashboardComponent } from './../../component/dashboard/finance-dashboard/finance-dashboard.component';
import {  TeacherDashboardComponent } from './../../component/dashboard/teacher-dashboard/teacher-dashboard.component';
import {  AdministrationDashboardComponent} from './../../component/dashboard/administration-dashboard/administration-dashboard.component';



import {  ChartModule } from 'angular2-highcharts';

import {  HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

// Material module design
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';



const routes: Routes = [
  {path: '', redirectTo: 'student-dashboard', pathMatch: 'full'},
  { path: 'student-dashboard', component: StudentDashboardComponent},
  { path: 'finance-dashboard', component: FinanceDashboardComponent},
  { path: 'teacher-dashboard', component: TeacherDashboardComponent},
  { path: 'administration-dashboard', component: AdministrationDashboardComponent}

]

declare var require:any;
export function highchartsFactory() {
  const hc = require('highcharts');
  const dd = require('highcharts/modules/drilldown');
  dd(hc);
  return require('highcharts');
  
}


@NgModule({
  declarations: [
    StudentDashboardComponent,
    FinanceDashboardComponent,
    TeacherDashboardComponent,
    AdministrationDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartModule.forRoot(highcharts),
    RouterModule.forChild(routes),
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule

  ],
  providers: [  {provide: HighchartsStatic, useValue: highcharts, useFactory: highchartsFactory},StudentService],
  exports: [
    RouterModule
  ]
})
export class DashboardModule { }
//platformBrowserDynamic().bootstrapModule(DashboardModule);
