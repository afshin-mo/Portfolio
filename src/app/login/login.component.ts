import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private authSrv:AuthenticationService) { }

  ngOnInit() {
  }
  public onLoginClick(){
    this.authSrv.login();
    console.log('Login Clicked');
  }

}
