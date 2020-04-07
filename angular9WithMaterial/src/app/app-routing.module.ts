import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './component/login/login.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AcademicsModule } from './modules/academics/academics.module';
import { EnrollmentModule } from './modules/enrollment/enrollment.module';
import { AdministrationModule } from './modules/administration/administration.module';
import { FinanceModule } from './modules/finance/finance.module';
import { ReportsModule } from './modules/reports/reports.module';
import { RndtestingModule } from './modules/rndtesting/rndtesting.module';




const routes: Routes = [
  {path: 'rndtesting', loadChildren: () => RndtestingModule, canActivate:[AuthGuard]},
  {path: 'dashboard', loadChildren: () => DashboardModule, canActivate:[AuthGuard]},
  {path: 'academics', loadChildren: () => AcademicsModule, canActivate:[AuthGuard]},
  {path: 'enrollment', loadChildren: () => EnrollmentModule, canActivate:[AuthGuard]},
  {path: 'administration', loadChildren: () => AdministrationModule, canActivate:[AuthGuard]},
  {path: 'finance', loadChildren: () => FinanceModule, canActivate:[AuthGuard]},
  {path: 'reports', loadChildren: () => ReportsModule, canActivate:[AuthGuard]},
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
