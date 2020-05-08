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
    check : boolean = false;
    check2 : boolean = false;
  ngOnInit(): void {
    console.log(this.check);
    if(this._authServ.getToken()){
      // this.check = false;
    }
    else{
      // this.check2 = true;
    }
    console.log(this.check);
    const dataObservable = this.dst.getData();
    dataObservable.subscribe((val: boolean) => {
        this.check = val;
    });
  }
  componentName:string ='EmployeeLogin';

  message(compname){
    // console.log(compname);
    console.log(this.componentName);
    this.componentName = compname;
  }

}
