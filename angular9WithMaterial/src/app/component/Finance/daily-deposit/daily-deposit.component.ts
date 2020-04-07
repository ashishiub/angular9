import { Component, OnInit } from '@angular/core';
import { DepositService } from './../../../service/deposit.service';
import { Router } from '@angular/router';
import { Dep } from 'src/app/model/deposit';
import { isNumber, isNull } from 'util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-daily-deposit',
  templateUrl: './daily-deposit.component.html',
  styleUrls: ['./daily-deposit.component.css']
})
export class DailyDepositComponent implements OnInit {

  // deposit={
  //   depositMethod: 'Select',
  //   depositType: 'Select',
  //   studentId: '',
  //   studentName: '',
  //   donationBy: '',
  //   amountString: ''
  // }

  constructor(private depositService: DepositService, public translate: TranslateService, private formBuilder:FormBuilder, private router: Router) {
    translate.addLangs(['en','bn']);
    translate.setDefaultLang('en');
   }

   Sel = "";

   switchLang(lang: string) {
    this.translate.use(lang);
    console.log("lang: "+ this.translate.currentLang);
  }

  
  

  deposit: Dep = {
    depositMethod:this.Sel,
    depositType: this.Sel,
    amountString: '',
    studentId: '',
    donationBy: ''
  };
  
  


  
  isEmpty: boolean=false;
  isDonate= false;
  isStudent= false;
  isValid= true;
  isAmountInNumber=true;
  isAmountPositive=true;


  depositForm: FormGroup;

  get getDepositForm(){
    return this.depositForm.controls;
  }

  

  ngOnInit() {
    this.depositForm = this.formBuilder.group({
      depositMethod: [this.deposit.depositMethod],
      depositType: [this.deposit.depositType],
      amountString: [this.deposit.amountString, Validators.required],
      studentId: [this.deposit.studentId, Validators.required],
      donationBy: [this.deposit.donationBy, Validators.required]
    })
  }


  checkForm(){
    // if(this.deposit.depositMethod === 'Select' || this.deposit.depositType === 'Select'){
    //   this.isValid=false;
    // }
    // else{
    //   this.isValid=true;
    // }

    if((this.deposit.depositType==='Donation' && this.deposit.donationBy=== '') || (this.deposit.depositType==='Student Payment' && this.deposit.studentId==='' || this.deposit.amountString==='')){
      this.isEmpty=true;
    }
    else {
      this.isEmpty=false;
    }
    
    if(isNaN(Number(this.deposit.amountString))){
      this.isAmountInNumber = false;
    }
    else{
      this.isAmountInNumber = true;
    }
    if(Number(this.deposit.amountString) <= 0){
      this.isAmountPositive = false;
    }
    else{
      this.isAmountPositive=true;
    }

    console.log('isValid: ' + this.isValid);
    console.log('isEmpty: ' + this.isEmpty);
    console.log('isAmountInNumber: ' + this.isAmountInNumber);
    console.log('isAmountPositive: ' + this.isAmountPositive);
  }
  OnSubmit(){
    this.checkForm();
    
    if(this.isValid && !this.isEmpty && this.isAmountInNumber && this.isAmountPositive){
      
    this.depositService.addDeposit(this.deposit).subscribe(
      (res: any) => {
        console.log(res);
        if(res) {
          console.log("dhukse");
          this.router.navigateByUrl('finance/deposit-list')
        }
        else{
          console.log(res);
        }
      },
      error => {
        console.log(error);
      });
    }
  }

}
