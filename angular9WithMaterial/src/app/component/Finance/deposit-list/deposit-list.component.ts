import { Component, OnInit } from '@angular/core';
import { DepositService } from './../../../service/deposit.service'
import { Router } from '@angular/router';
import { Deposit } from './../../../model/deposit';
import * as moment from 'moment';
import { ColumnApi, GridApi } from 'ag-grid-community';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaginationInstance } from 'ngx-pagination';


var f = false;

@Component({
  selector: 'app-deposit-list',
  templateUrl: './deposit-list.component.html',
  styleUrls: ['./deposit-list.component.css']
})
export class DepositListComponent implements OnInit {
  deposite: Deposit;
  deposit: Deposit[];

  rowData: any;

  isModal = false;
  serial= 1;
  public config: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 10,
    currentPage: 1
  };

  isNextShow=false;



  constructor(private formBuilder: FormBuilder, private depositService: DepositService) { }

  queryModel = {
    depositMethodQuery: '',
    depositTypeQuery: '',
    dateFrom: '',
    dateTo: '',
    amountLess: '',
    amountMore: ''
  }

  depositMethod = 'Select';
  depositType = 'Select';
  amount = '';

  dateValid = true;
  isAmountLessPositive = true;
  isAmountLessInNumber = true;
  isAmountMorePositive = true;
  isAmountMoreInNumber = true;
  amountValid = true;


  deleteOid = '';


  UpdateForm: FormGroup;

  ngOnInit() {


  }
  get getupdateForm() {
    return this.UpdateForm.controls;
  }
  getDipositeList() {
    this.depositService.getDeposit().subscribe((data) => {
      this.deposit = (data as any);
    });
  
  }


  //depMethod = '';
  depType = '';
  Edit(id) {
    this.depositService.getDepositById(id)
      .subscribe({
        next: (data) => {
          this.deposite = data as any;
          if (this.deposite !== null) {

            this.depType = data.depositType
            this.UpdateForm = this.formBuilder.group({
              depositMethod: [this.deposite.depositMethod],
              oid: [this.deposite.oid],
              amount: [this.deposite.amount, Validators.required],
              depositType: [this.deposite.depositType],
              studentId: [this.deposite.studentId, Validators.required],
              donationBy: [this.deposite.donationBy, Validators.required],
            })
            $('#myModal').modal('show');

          }
        }
      })

    console.log(id);
  }

  del = {
    oid: ''
  }

  delete(oid){
    this.deleteOid=oid;
    $('#deleteModal').modal('show');
  }



  approveDelete(){
    console.log(this.deleteOid);
    this.del.oid = this.deleteOid;
    this.depositService.deleteDepositById(this.del)
    .subscribe((res: any) => {
      console.log(res);
      if(res){
        $('#deleteSuccessModal').modal('show');
        $('#deleteModal').modal('hide');
        this.refresh();
      }
      else{
        $('#deleteFailModal').modal('show');
        $('#deleteModal').modal('hide');
      }
    },
    error=> {
      $('#deleteFailModal').modal('show');
      $('#deleteModal').modal('hide');
    }
    )
    
  }



  

  public getDeposit() {
    this.depositService.getDeposit().
      subscribe((data) => {
        this.deposit = data;
        console.log(this.deposit[2].oid);
      },
        error => {
          console.log(error);
        });
  }





  updateModel = {
    oid: '',
    depositMethod: '',
    depositType: '',
    amountString: '',
    studentId: '',
    donationBy: ''
  }

  responseMsg;

  onUpdate() {
    console.log(this.updateModel);
    this.updateModel.depositMethod = (document.getElementById('depMethod') as HTMLSelectElement).value;
    this.updateModel.donationBy = (document.getElementById('donationBy') as HTMLInputElement).value;
    this.updateModel.depositType = (document.getElementById('depType') as HTMLSelectElement).value;
    this.updateModel.amountString = (document.getElementById('amount') as HTMLInputElement).value;
    this.updateModel.studentId = (document.getElementById('studentId') as HTMLInputElement).value;
    this.updateModel.oid = (document.getElementById('oid') as HTMLInputElement).value;



    this.depositService.updateDeposit(this.updateModel).subscribe(
      (res: any) => {
        console.log(res);
        if (res) {
          console.log(res);
          //this.refresh();
          $('#successModal').modal('show');
          $('#myModal').modal('hide');
          $('#failModal').modal('hide');
          this.refresh();
        }
        else if (res === false) {
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


  onPageChange(number: number) {
    this.config.currentPage = number;
  }


  refresh() {
    if (this.depositMethod === 'Select') this.queryModel.depositMethodQuery = '';
    else this.queryModel.depositMethodQuery = this.depositMethod;

    if (this.depositType === 'Select') this.queryModel.depositTypeQuery = '';
    else this.queryModel.depositTypeQuery = this.depositType;

    if (this.queryModel.dateFrom > this.queryModel.dateTo && this.queryModel.dateFrom !== '' && this.queryModel.dateTo !== '') {
      this.dateValid = false;
      return;
    }
    else this.dateValid = true;

    if (this.queryModel.amountMore != '') {
      if (isNaN(Number(this.queryModel.amountMore))) {
        this.isAmountMoreInNumber = false;
      }
      else {
        this.isAmountMoreInNumber = true;
      }
      if (Number(this.queryModel.amountMore) < 0) {
        this.isAmountMorePositive = false;
      }
      else {
        this.isAmountMorePositive = true;
      }
    }

    if (this.queryModel.amountLess != '') {
      if (isNaN(Number(this.queryModel.amountLess))) {
        this.isAmountLessInNumber = false;
      }
      else {
        this.isAmountLessInNumber = true;
      }
      if (Number(this.queryModel.amountLess) < 0) {
        this.isAmountLessPositive = false;
      }
      else {
        this.isAmountLessPositive = true;
      }
    }

    if (this.isAmountLessInNumber && this.isAmountLessPositive && this.isAmountMorePositive && this.isAmountMoreInNumber && this.queryModel.amountLess !== '' && this.queryModel.amountMore != '') {
      if (Number(this.queryModel.amountLess) > Number(this.queryModel.amountMore)) {
        this.amountValid = false;
      }
      else this.amountValid = true;
    }
    else {
      this.amountValid = true;
    }

    if (this.dateValid && this.amountValid && this.isAmountLessInNumber && this.isAmountLessPositive && this.isAmountMorePositive && this.isAmountMoreInNumber) {
      this.getDepositByRefresh(this.queryModel);

      this.isNextShow = true;
      

    }


  }

  getDepositByRefresh(model){
    this.depositService.getDepositByRefresh(model).subscribe((data) => {
      this.deposit = (data as any);
    });  
  }


}
