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
    // console.log(this.check);
    // console.log(this._authServ.getToken())
    if(this._authServ.getToken()!=null){
      this.check = false;
      this.name = localStorage.getItem("mytoken");
      // console.log(this.name)
    }
    else{
      this.check=true;
    }
    // console.log(this.check);
  }

  add(){

  }
  logoutUser(){
    this._authServ.logout();
    this.dst.setLogValue(false);
    this.check = this._authGuard.check();
  }

}
