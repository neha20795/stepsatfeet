import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../../../services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updatedetail',
  templateUrl: './updatedetail.component.html',
  styleUrls: ['./updatedetail.component.scss']
})
export class UpdatedetailComponent implements OnInit {
  empDetails : any;
  constructor(private _emp: EmployeeService,
              private _router : Router) { }
  email : string;
  ngOnInit(): void {
    console.log(localStorage.getItem("mytoken"));
    this.email = localStorage.getItem("mytoken");
    this._emp.updateEmpInfo(this.email).subscribe(data=>{
      console.log(data);
      let arrDetail =data;
      this.empDetails = arrDetail;
      console.log(this.empDetails);
    },
    err=>{
      console.log(err);
    })
  }
  update(){
    this._emp.updateEmpDatails(this.email, this.empDetails.detail).subscribe(data=>{
      console.log(data);
      this._router.navigate(["/"]);
    },
    err=>{
      console.log(err);
    });
  }
}
