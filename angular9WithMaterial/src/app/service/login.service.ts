//import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/model/login';
import { Url } from '../utilities/urlconstants';
import { Component, Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string;
  //apiUrl: 'Student/Login';
  baseUrl: "https://localhost:44361/api/Login/GetCredentials";

  _baseUrl: string;
  _getCredentials: string;

  constructor(private http: HttpClient) {
    this._baseUrl = Url.baseUrl;
    this._getCredentials = Url.getCredentials;
   }

   checkCredential(formdata): Observable<Login> {
    //const url = "https://localhost:44361/api/Login/GetCredentials";
    console.log(formdata.username, formdata.password);
     
    return this.http.post<Login>(this._baseUrl+this._getCredentials, formdata);
     
  }
}
