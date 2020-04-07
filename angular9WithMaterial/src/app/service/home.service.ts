import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {StudentList} from './../model/studentList';
import {DashboardChart} from './../model/dashboard-chart';
import { Observable } from 'rxjs';

const baseUrl = "https://localhost:44361/api/Student/GetStudents";
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  
  constructor(private http: HttpClient) { }

  getAll(): Observable<StudentList[]> {
    return this.http.get<StudentList[]>(baseUrl);
  }

  
}
