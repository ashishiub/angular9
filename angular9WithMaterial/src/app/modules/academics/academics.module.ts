import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from 'src/app/component/Academics/course/course.component';
import { SemesterComponent } from 'src/app/component/Academics/semester/semester.component';
import { ClassroomComponent } from 'src/app/component/Academics/classroom/classroom.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';


const routes: Routes = [
  {path: 'course', component: CourseComponent},
  {path: 'semester', component: SemesterComponent},
  {path: 'classroom', component: ClassroomComponent}
]

@NgModule({
  declarations: [
    CourseComponent,
    SemesterComponent,
    ClassroomComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AcademicsModule { }
