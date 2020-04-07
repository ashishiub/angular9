import { Component, OnInit } from '@angular/core';
import { ExpenseService } from './../../../service/expense.service';
import { Router } from '@angular/router';
import { Exp } from 'src/app/model/expense';
import { isNumber, isNull } from 'util';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { isNumeric } from 'rxjs/util/isNumeric';

@Component({
  selector: 'app-daily-expense',
  templateUrl: './daily-expense.component.html',
  styleUrls: ['./daily-expense.component.css']
})
export class DailyExpenseComponent implements OnInit {

  expense: Exp = {
    paymentMethod: 'Select',
    paymentTo:'',
    descriptionOfCharge: '',
    typeOfPayment: 'Select',
    amountString: ''
  }

  isValid: boolean = true;
  isAmountInNumber: boolean = true;
  isEmpty: boolean = false;
  isAmountPositive=true;

  constructor(private expenseService: ExpenseService, private formBuidler: FormBuilder, private router: Router) { }

  ngOnInit() {
   this.expenseForm = this.formBuidler.group({
     paymentMethod: [this.expense.paymentMethod],
     paymentTo: [this.expense.paymentTo, Validators.required],
     amountString: [this.expense.amountString, Validators.required],
     typeOfPayment: [this.expense.typeOfPayment],
     descriptionOfCharge: [this.expense.descriptionOfCharge, Validators.required]
   }) 
  }

  expenseForm: FormGroup;

  get getExpenseForm(){
    return this.expenseForm.controls;
  }

  checkForm(){
    if(this.expense.paymentMethod==='Select' || this.expense.typeOfPayment==='Select' || this.expense.amountString===''){
      this.isValid = false;
      console.log(this.isValid);
    }
    else{
      this.isValid = true;
      console.log(this.isValid);
      console.log(this.expense.descriptionOfCharge);
      console.log(this.expense.paymentTo);
    }
    
    if(isNaN(Number(this.expense.amountString))){
      this.isAmountInNumber = false;
    }
    else{
      this.isAmountInNumber = true;
      console.log(this.isAmountInNumber);
    }

    if(this.expense.descriptionOfCharge==='' || this.expense.paymentTo==='' || this.expense.amountString===''){
      this.isEmpty = true;
      console.log(this.isEmpty);
    }
    else{
      this.isEmpty = false;
      console.log(this.isEmpty);
    }

    if(Number(this.expense.amountString) <= 0){
      this.isAmountPositive = false;
    }
    else{
      this.isAmountPositive=true;
    }

    
  }
  OnSubmit(){
    
    this.checkForm();
    if(this.isValid && this.isAmountInNumber && this.isAmountPositive && !(this.isEmpty)){
      
    this.expenseService.addExpense(this.expense)
    .subscribe(
      (res: any) => {
        console.log(res);
        if (res) {
          console.log("dhukse");
          this.router.navigateByUrl('/finance/expense-list');

        }
        else {
          console.log(res);
        }
      },
      error => {
        console.log(error);
      });
    }
  }

}
