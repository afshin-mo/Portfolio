import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn$:Observable<boolean>;
  constructor(private authSrv:AuthenticationService){}
  ngOnInit(){
    console.log( this.isLoggedIn$);
    this.isLoggedIn$=this.authSrv.isLoggedIn;
    console.log( this.isLoggedIn$);
  }
}
