import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAdministrationComponent } from 'src/app/component/Administration/user-administration/user-administration.component';
import { CourseAdminComponent } from 'src/app/component/Administration/course-admin/course-admin.component';
import { TeacherComponent } from 'src/app/component/Administration/teacher/teacher.component';
import { RouterModule, Routes } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


const routes: Routes = [
  {path: 'user-administration', component: UserAdministrationComponent},
  {path: 'course-admin', component: CourseAdminComponent},
  {path: 'teacher', component: TeacherComponent}
]


@NgModule({
  declarations: [
    UserAdministrationComponent,
    CourseAdminComponent,
    TeacherComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  exports: [
    RouterModule
  ]
})
export class AdministrationModule { }
