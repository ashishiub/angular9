import { Observable } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';
import { Expense } from 'src/app/model/expense';
import { Url } from '../utilities/urlconstants';
import { Component, Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  _baseUrl: string;
  _addExpense: string;
  _expenseList: string;

  constructor(private http: HttpClient) {
    this._baseUrl = Url.baseUrl;
    this._addExpense = Url.addExpense;
    this._expenseList = Url.expenseList;
   }

   addExpense(formdata): Observable<Expense> {
    //console.log(formdata.username, formdata.password);
     
    return this.http.post<Expense>(this._baseUrl+this._addExpense, formdata);
  }

  getExpense(): Observable<Expense[]> {
    return this.http.post<Expense[]>(this._baseUrl+this._expenseList, null);
  }
}
