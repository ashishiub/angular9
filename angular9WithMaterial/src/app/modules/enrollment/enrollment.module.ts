import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from 'src/app/component/Enrollment/student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';


const routes: Routes = [
  {path: 'student', component: StudentComponent}
]


@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [
    StudentService
  ]
})
export class EnrollmentModule { }
