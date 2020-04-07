import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyExpenseComponent } from 'src/app/component/Finance/daily-expense/daily-expense.component';
import { DailyDepositComponent } from 'src/app/component/Finance/daily-deposit/daily-deposit.component';
import { AuditComponent } from 'src/app/component/Finance/audit/audit.component';
import { ExpenseListComponent } from 'src/app/component/Finance/expense-list/expense-list.component';
import { DepositListComponent } from 'src/app/component/Finance/deposit-list/deposit-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpenseService } from 'src/app/service/expense.service';
import { DepositService } from 'src/app/service/deposit.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HttpBackend } from '@angular/common/http';

// Material module design
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


const routes: Routes = [
  {path: 'daily-deposit', component: DailyDepositComponent},
  {path: 'daily-expense', component: DailyExpenseComponent},
  {path: 'audit', component: AuditComponent},
  {path: 'deposit-list', component: DepositListComponent},
  {path: 'expense-list', component: ExpenseListComponent}
]


@NgModule({
  declarations: [
    DailyExpenseComponent,
    DailyDepositComponent,
    AuditComponent,
    ExpenseListComponent,
    DepositListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ExpenseService,
    DepositService
  ],
  exports: [
    RouterModule
  ]
})
export class FinanceModule { }

//Compilation Support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
