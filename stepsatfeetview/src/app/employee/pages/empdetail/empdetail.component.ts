import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DatastorerService } from '../../../services/datastorer.service';
import { Employeedata } from 'src/app/models/employeedata';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.scss']
})
export class EmpdetailComponent implements OnInit {
@Input() id : any;
  constructor(private _emp : EmployeeService,
              private _router : Router,
              private _route : ActivatedRoute,
              private dst : DatastorerService) { }
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
      let name = params.get('emailId');
      this.dat = name;
      // console.log(name);
    })
     this._emp.searchEmployee(this.dat).subscribe(result=>{
      // console.log(result);
      this.data = result;
      this.dst.setname(this.data.detail.email, this.data.detail.image[0]);
    },
    err=>{
      this.msg = "Check the spelling";
    });

  }
  callComponent(){
    let email = this.data.detail.email;
    let getUserType = localStorage.getItem("Usertype");
    console.log(localStorage.getItem("Usertype"));
    console.log(this.dst.getType());
    if(getUserType == 'employee'){
      this._router.navigate(["employee/addempreview", email]);
    }
    else{
      this._router.navigate(["employee/addemployeereview", email]);
    }
  }
  //imgurl = this.data.detail.image;
}
