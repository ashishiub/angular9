import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralInformationComponent } from 'src/app/component/Reports/general-information/general-information.component';
import { StudentInformationComponent } from 'src/app/component/Reports/student-information/student-information.component';
import { TeacherInformationComponent } from 'src/app/component/Reports/teacher-information/teacher-information.component';
import { MonthlyExpenseReportComponent } from 'src/app/component/Reports/monthly-expense-report/monthly-expense-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MonthlyDepositReportComponent } from 'src/app/component/reports/monthly-deposit-report/monthly-deposit-report.component';




const routes: Routes = [
  {path: 'general-information', component: GeneralInformationComponent},
  {path: 'student-information', component: StudentInformationComponent},
  {path: 'teacher-information', component: TeacherInformationComponent},
  {path: 'monthly-expense-report', component: MonthlyExpenseReportComponent},
  {path: 'monthly-deposit-report', component: MonthlyDepositReportComponent}
]
//http://localhost:4200/reports/student-information

@NgModule({
  declarations: [
    GeneralInformationComponent,
    StudentInformationComponent,
    TeacherInformationComponent,
    MonthlyExpenseReportComponent,
    MonthlyDepositReportComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatSliderModule ,
  ],
  exports: [
    RouterModule
  ],
  providers: [
    StudentService
  ]
})
export class ReportsModule { }
