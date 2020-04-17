import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  @Output() public sidenavToggle= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  public onToggleSidenav= () =>{
    this.sidenavToggle.emit();
  }

}
