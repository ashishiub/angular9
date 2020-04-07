import { Observable } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';
import { Deposit } from 'src/app/model/deposit';

import { Component, Inject, Injectable } from '@angular/core';
import {Url} from '../utilities/urlconstants'
@Injectable({
  providedIn: 'root'
})
export class DepositService {

  _baseUrl: string;
  _depositList: string;
  _depositListByQuery: string;
  _addDeposit: string;
  _updateDeposit: string;
  _depositById: string;
  _deleteDepositById: string;
  constructor(private http: HttpClient) {
    this._baseUrl = Url.baseUrl;
    this._depositList = Url.depositList;
    this._depositListByQuery = Url.depositListByQuery;
    this._addDeposit = Url.addDeposit;
    this._updateDeposit = Url.updateDeposit;
    this._depositById = Url.depositById;
    this._deleteDepositById = Url.deleteDepositById;
   }

  addDeposit(formdata): Observable<Deposit> {
    console.log(formdata);

    return this.http.post<Deposit>(this._baseUrl+this._addDeposit, formdata);
  }

  getDeposit(): Observable<Deposit[]> {
    return this.http.post<Deposit[]>(this._baseUrl+this._depositList, null);
  }

  getDepositByRefresh(queryModel): Observable<Deposit[]> {
    return this.http.post<Deposit[]>(this._baseUrl+this._depositListByQuery, queryModel);
  }

  updateDeposit(formdata): Observable<Deposit> {
    console.log(formdata);
    return this.http.post<Deposit>(this._baseUrl+this._updateDeposit,formdata);
    //debugger;
  }

  getDepositById(oid): Observable<Deposit> {
    return this.http.get<Deposit>(this._baseUrl+this._depositById+oid);
  }

  deleteDepositById(oid): Observable<Deposit> {
    console.log(oid); 
    return this.http.post<Deposit>(this._baseUrl+this._deleteDepositById,oid);
  }
}
