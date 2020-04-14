import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private LoggedIn=new BehaviorSubject<boolean>(false);

  get isLoggedIn(){
    return this.LoggedIn.asObservable();
  }

  constructor(private router:Router) { }

  login(){
    this.LoggedIn.next(true);
    this.router.navigate(['/about']);
  }
  logout(){
    this.LoggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
