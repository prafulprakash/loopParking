import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  flag:boolean=false;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  
  login(userName: string, password: string){
if(userName=='praful' && password=='abc'){
this.router.navigate(['home'])
}else{
  this.flag=true;

}

  }

}
