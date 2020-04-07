import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Login } from 'src/app/model/login';
import { Observable } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    username: '',
    password: ''
  }
  isSuccess = true;
  isLoggedIn = false;
  
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  checkLogin() {

    const data = {
      username: this.login.username,
      password: this.login.password
    }

    //console.log('   ' + data.username + '   ' + data.password);


    this.loginService.checkCredential(data)
      .subscribe(
        (res: any) => {
          console.log(res);
          if (res) {
            console.log("dhukse");
            if(res.token !== "-1" && res.username!==""){
            localStorage.setItem('token', res.token);
            localStorage.setItem('username', res.username);
            this.isSuccess = true;
            this.isLoggedIn = true;
            location.reload();
            }
            else{
              this.isSuccess = false;
              this.isLoggedIn = false;
            }
            
            //this.router.navigateByUrl('/dashboard');

          }
          else {
            //console.log(res);
            this.isSuccess = false;
            this.isLoggedIn = false;
          }
          //console.log(this.ifLoggedIn);
          //console.log(data);
        },
        error => {
          console.log(error);
        });
    //this.submitted = true;
    
  }

}
