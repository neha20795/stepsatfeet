import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Employeedata } from 'src/app/models/employeedata';
@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.scss']
})
export class EmpdetailComponent implements OnInit {
@Input() id : any;
  constructor(private _emp : EmployeeService,private _router : Router, private _route : ActivatedRoute) { }
  // data : Employeedata ={
  //   _id: "",
  //   fname: "" ,
  //   lname: "",
  //   dob: null,
  //   email:"",
  //   address:"",
  //   organization: "" ,
  //   qualification: null,
  //   mobile: "",
  //   experience: null,
  //   gender: "",
  //   image: ""
  // };
  data : any;
  dat : any;
  msg = "";
  ngOnInit(): void {

    this._route.paramMap.subscribe((params : ParamMap)=>{
      let name = params.get('name');
      this.dat = name===null?"Neha":name;
      console.log(name);
    })
     this._emp.findEmployee(this.dat).subscribe(result=>{
      console.log(result);
      this.data = result;
    },
    err=>{
      this.msg = "Check the spelling";
    });

  }
  //imgurl = this.data.detail.image;

}
