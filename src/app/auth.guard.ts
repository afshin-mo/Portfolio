import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate, RouterStateSnapshot,Router, UrlTree } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router,private authSrv:AuthenticationService) {
    
  }
  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ):Observable<boolean>{
    //console.log(this.authSrv.isLoggedIn.source.value);
    
      if(!this.authSrv.isLoggedIn.source.source){
        this.router.navigate(['/login']);
        return this.authSrv.isLoggedIn.source.source;
      }
      return this.authSrv.isLoggedIn.source.source;
  }
  
}
