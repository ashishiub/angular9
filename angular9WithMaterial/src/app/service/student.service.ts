import { Observable } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';
import { StudentList } from 'src/app/model/studentList';

import { Component, Inject, Injectable } from '@angular/core';
import { DashboardChart } from '../model/dashboard-chart';
import { Url } from '../utilities/urlconstants';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  _baseUrl: string;
  _addStudent: string;
  _studentList: string;
  _studentListByQuery: string;
  _updateStudent: string;
  _getStudentById: string;
  _getMaleFemaleRatio: string;
  _getEducationYears: string;
  _deleteStudentById: string;
  constructor(private http: HttpClient) {
    this._baseUrl = Url.baseUrl;
    this._addStudent = Url.addStudent;
    this._studentList = Url.studentList;
    this._studentListByQuery = Url.studentListByQuery;
    this._updateStudent = Url.updateStudent;
    this._getStudentById = Url.getStudentById;
    this._getMaleFemaleRatio = Url.getMaleFemaleRatio;
    this._getEducationYears = Url.getEducationYears;
    this._deleteStudentById = Url.deleteStudentById;
   }

  addStudent(formdata): Observable<StudentList> {
    // # Review url should be come from constant/util file

    return this.http.post<StudentList>(this._baseUrl+this._addStudent, formdata);
  }

  getStudents(): Observable<StudentList[]> {
    return this.http.post<StudentList[]>(this._baseUrl+this._studentList, null);
  }

  getStudentByRefresh(queryModel): Observable<StudentList[]> {
    console.log(queryModel);
    return this.http.post<StudentList[]>(this._baseUrl+this._studentListByQuery, queryModel);
  }

  updateStudent(formdata): Observable<StudentList> {
    return this.http.post<StudentList>(this._baseUrl+this._updateStudent, formdata);
  }

  getStudentById(oid): Observable<StudentList> {
    return this.http.get<StudentList>(this._baseUrl+this._getStudentById+oid);
  }

  getMaleFemaleRatio(sel): Observable<any>{
    return this.http.get<any>(this._baseUrl+this._getMaleFemaleRatio+sel);
  }

  getEducationYears(): Observable<DashboardChart[]>{
    return this.http.post<DashboardChart[]>(this._baseUrl+this._getEducationYears,null);
  }

  deleteStudentById(oid): Observable<StudentList> {
    console.log(oid); 
    return this.http.post<StudentList>(this._baseUrl+this._deleteStudentById,oid);
  }



}
