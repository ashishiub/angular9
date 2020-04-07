import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Login } from 'src/app/model/login';
import { Observable } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { isDate } from 'util';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from 'src/app/model/studentList';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
// # Review call from interface #
  student: Student = {
    name:'',
    dob:'',
    gender:''
  }

  studentForm: FormGroup;

  get getStudentForm(){
    return this.studentForm.controls;
  }

  constructor(private studentService: StudentService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      name: [this.student.name, Validators.required],
      dob: [this.student.dob, Validators.required],
      gender: [this.student.gender]
    })
  }

  isEmpty=false;
  isValidDate=true;
  isNameValid=true;

  checkForm(){
    if(this.student.gender==='' || this.student.name==='' || this.student.dob===''){
      this.isEmpty=true;
    }
    else{
      this.isEmpty=false;
    }

    if(isDate(this.student.dob || this.student.dob.length !== 10) || Number(this.student.dob.substring(0,4))>=Number(new Date().getFullYear()) || Number(this.student.dob.substring(0,4))<=1971){
      this.isValidDate=false;
    }
    else{
      this.isValidDate=true;
    }

    
    for(let i=0; i< this.student.name.length; i++){
      if(!(isNaN(Number(this.student.name[i])))){
        if(this.student.name[i]==' ') continue;
        this.isNameValid=false;
        break;
      }
      else this.isNameValid=true;

    }
    
    if(!this.isEmpty && this.isValidDate && this.isNameValid){
      console.log('Shob thik ase');
    }
    
  }
  onSubmit(){
    this.checkForm();

    if(!this.isEmpty && this.isValidDate && this.isNameValid){
    this.studentService.addStudent(this.student)
      .subscribe(
        (res: any) => {
          console.log(res);
          if (res) {
            console.log("dhukse");
            //localStorage.setItem('token', res);
            //this.isSuccess = true;
            //location.reload();
            this.router.navigateByUrl('/reports/student-information');
// # Review need to add the url in the constant file

          }
          else {
            console.log(res);
            //this.isSuccess = false;
          }
          //console.log(this.ifLoggedIn);
          //console.log(data);
        },
        error => {
          console.log(error);
        });
      }
  }

}
