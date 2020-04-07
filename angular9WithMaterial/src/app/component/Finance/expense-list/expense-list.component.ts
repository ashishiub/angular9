import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/service/expense.service';
import { Router } from '@angular/router';
import { Expense } from 'src/app/model/expense';
import * as moment from 'moment';
@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  expense: Expense[];


  constructor(private expenseService:ExpenseService) { }

  ngOnInit() {
    this.getExpense();
  }
  public getExpense(){
    this.expenseService.getExpense().
      subscribe((data) => {
        this.expense = data;
      },
      error => {
        console.log(error);
      });
  }

}
