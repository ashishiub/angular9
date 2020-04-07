import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DevWebUI';

  isLoggedIn=false;

  isLoginForm = true;
  username= '';
  ngOnInit(){
    if(localStorage.getItem("token")!=null){
      this.isLoggedIn=true;
      this.isLoginForm = false;
      this.username = localStorage.getItem("username");
    }
    else{
      this.isLoggedIn=false;
      this.isLoginForm = true;
      this.username = '';
    } 
  }
  

  onLogout() {
    localStorage.removeItem('token');
    //this.router.navigateByUrl('/login');
  }
}
