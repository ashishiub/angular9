import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RndtestingComponent } from 'src/app/component/rndtesting/rndtesting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { CourseComponent } from 'src/app/component/Academics/course/course.component';
import { SemesterComponent } from 'src/app/component/Academics/semester/semester.component';
import { ClassroomComponent } from 'src/app/component/Academics/classroom/classroom.component';
import {  Routes } from '@angular/router';
import { RouterModule } from '@angular/router';



// Material module design
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

const routes: Routes = [
  {path: 'rndtesting', component: RndtestingComponent}
  
]


@NgModule({
  declarations: [
    RndtestingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule    
  ], 
  exports: [
    RouterModule
  ]
})
export class RndtestingModule { }
