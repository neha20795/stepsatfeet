import { Component, OnInit } from '@angular/core';
import { EmploginService } from '../services/emplogin.service';
import { EmployeeloginGuard } from '../guards/employeelogin.guard';
import { DatastorerService } from '../services/datastorer.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _authServ : EmploginService,
              private _authGuard : EmployeeloginGuard,
              private dst : DatastorerService) { }
  check : boolean = true;
  name : string;
  ngOnInit(): void {
    console.log(this.check);
    const dataObservable = this.dst.getData();
    dataObservable.subscribe((val: boolean) => {
        this.check = val;
    });
    if(this._authServ.isLoggedIn()){
      this.name = localStorage.getItem("mytoken");
    }
    console.log(this.check);
  }

  add(){

  }
  logoutUser(){
    this._authServ.logout();
    this.dst.setLogValue(false);
    this.check = this._authGuard.check();
  }

}
