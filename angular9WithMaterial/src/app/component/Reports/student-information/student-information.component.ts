import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Router } from '@angular/router';
import { StudentList } from 'src/app/model/studentList';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})
export class StudentInformationComponent implements OnInit {

  studentList: StudentList[];

  student: StudentList;

  isNextShow = false;
  serial = 1;



  queryModel = {
    birthFrom: '',
    birthTo: '',
    genderQuery: ''
  };
  gender = 'Select';

  constructor(private formBuilder: FormBuilder, private studentService: StudentService) { }

  UpdateForm: FormGroup;
  deleteOid = '';

  ngOnInit() {
    //this.getStudentList();

  }


  public config: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 10,
    currentPage: 1
  };
  onPageChange(number: number) {
    this.config.currentPage = number;
  }

  get getupdateForm() {
    return this.UpdateForm.controls;
  }


  getStudentList() {
    this.studentService.getStudents().subscribe((data) => {
      this.studentList = (data as any);
      console.log(data);
    });

  }

  dateValid = true;

  refresh() {
    if (this.queryModel.birthFrom > this.queryModel.birthTo && this.queryModel.birthFrom !== '' && this.queryModel.birthTo !== '') {
      this.dateValid = false;
      return;
    }
    else this.dateValid = true;


    if (this.gender === 'Select') this.queryModel.genderQuery = '';
    else this.queryModel.genderQuery = this.gender;

    if (this.dateValid) {
      this.studentService.getStudentByRefresh(this.queryModel)
        .subscribe((data) => {
          this.studentList = data;
        },
          error => {
            console.log(error);
          });

      this.isNextShow = true;
    }
  }

  public getStudents() {

    this.studentService.getStudents().
      subscribe((data) => {
        this.studentList = data;

      },
        error => {
          console.log(error);
        });

  }


  Edit(oid) {
    this.studentService.getStudentById(oid)
      .subscribe({
        next: (data) => {
          this.student = data as any;
          if (this.student !== null) {

            this.UpdateForm = this.formBuilder.group({
              name: [this.student.name, Validators.required],
              oid: [this.student.oid],
              gender: [this.student.gender],
              dob: [this.student.dob.toString().substring(0, 10), Validators.required],
              studentId: [this.student.studentId],
            })
            $('#myModal').modal('show');
          }
        }
      })

    console.log(oid);
  }

  updateModel = {
    oid: '',
    name: '',
    gender: '',
    dob: ''
  }

  isUpdateSuccessful = false;
  isModalDismiss = false;
  onUpdate() {
    this.updateModel.oid = (document.getElementById('oid') as HTMLInputElement).value;
    this.updateModel.name = (document.getElementById('name') as HTMLInputElement).value;
    this.updateModel.gender = (document.getElementById('gender') as HTMLSelectElement).value;
    this.updateModel.dob = (document.getElementById('dob') as HTMLInputElement).value;

    //console.log(this.updateModel);
    this.isUpdateSuccessful = true;
    this.isModalDismiss = true;

    this.studentService.updateStudent(this.updateModel).subscribe(
      (res: any) => {
        console.log(res);
        if (res) {
          $('#successModal').modal('show');
          $('#myModal').modal('hide');
          $('#failModal').modal('hide');
          this.getStudentList();
        }
        else {
          console.log(res);
          $('#failModal').modal('show');
          $('#myModal').modal('hide');
          $('#successModal').modal('hide');
        }
      },
      error => {
        console.log(error);
        $('#failModal').modal('show');
        $('#myModal').modal('hide');
        $('#successModal').modal('hide');
      });
  }


  del = {
    oid: ''
  }

  delete(oid) {
    this.deleteOid = oid;
    $('#deleteModal').modal('show');
  }
  approveDelete() {
    console.log(this.deleteOid);
    this.del.oid = this.deleteOid;
    this.studentService.deleteStudentById(this.del)
      .subscribe((res: any) => {
        console.log(res);
        if (res) {
          $('#deleteSuccessModal').modal('show');
          $('#deleteModal').modal('hide');
          this.refresh();
        }
        else {
          $('#deleteFailModal').modal('show');
          $('#deleteModal').modal('hide');
        }
      },
        error => {
          $('#deleteFailModal').modal('show');
          $('#deleteModal').modal('hide');
        }
      )
  }

}
