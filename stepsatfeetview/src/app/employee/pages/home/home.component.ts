import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from '../../../services/employee.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
@Input() sname : string;
  constructor(private _emp : EmployeeService, private _router : Router) { }
  data : any;
  _id : any;
  ngOnInit(): void {

    this.data = this._emp.findEmployee(this.sname);
    console.log(this.data);
    this._id = this.data._id;
    console.log(this._id);
  }
  callComponent(_id){
    this._router.navigate(["employee/addempreview", _id]);
  }
}
