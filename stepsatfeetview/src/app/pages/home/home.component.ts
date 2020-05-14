import { Component, OnInit } from '@angular/core';
import { EmploginService } from 'src/app/services/emplogin.service';
import { EmployeeloginGuard } from 'src/app/guards/employeelogin.guard';
import { DatastorerService } from '../../services/datastorer.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _authServ : EmploginService,
    private _authGuard : EmployeeloginGuard,
    private dst : DatastorerService) { }
    check : boolean = true;
    check2 : boolean = false;
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
    // console.log(this.check);

  }
  componentName:string ='EmployeeLogin';

  message(compname){
    // console.log(compname);
    // console.log(this.componentName);
    this.componentName = compname;
  }

}
