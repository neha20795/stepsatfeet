import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../../../services/employee.service';
import { Employeeupdate } from '../../../models/employeeupdate';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updatedetail',
  templateUrl: './updatedetail.component.html',
  styleUrls: ['./updatedetail.component.scss']
})
export class UpdatedetailComponent implements OnInit {
  empDetails : Employeeupdate = {
  fname : "",
  lname : "",
  address :{
    house_no : null,
    street : "",
    town : "",
    city : "",
    state : "",
    country : "",
    pincode : null
  },
  organization : "",
  qualification : "",
  experience : null,
  gender : '',
  mobile : ['']
}
 mob : string;
  constructor(private _emp: EmployeeService,
              private _router : Router) { }
  email : string;
  ngOnInit(): void {
    console.log(localStorage.getItem("mytoken"));
    this.email = localStorage.getItem("mytoken");
    this._emp.updateEmpInfo(this.email).subscribe(data=>{
      console.log(data);
      let datanote =data['detail'];
      console.log(datanote)
      this.empDetails ={
        fname :datanote.fname,
        lname : datanote.lname,
        address : {
          house_no : datanote.address.house_no,
          street : datanote.address.street,
          town : datanote.address.town,
          city : datanote.address.city,
          state : datanote.address.state,
          country : datanote.address.country,
          pincode : datanote.address.pincode
        },
        organization : datanote.organization,
        qualification : datanote.qualification,
        experience : datanote.experience,
        gender : datanote.gender,
        mobile : datanote.mobile
      }
      let len = datanote.mobile.length;
      this.mob = datanote.mobile[len-1];
    },
    err=>{
      console.log(err);
    })
  }
  update(){
    console.log("Yoau are in");
    // for(let i=0;i<this.empDetails.mobile.length;i++){
    //   console.log(this.mob);
    //   this.mob.push(this.empDetails.mobile[i]);
    // }
    let len = this.mob.length;

      this.empDetails.mobile.push(this.mob);

    console.log(this.empDetails.mobile);
    // this.mob = Array.from(new Set(this.mob));
    //this.empDetails.mobile = this.mob;
    this._emp.updateEmpDetails(this.email, this.empDetails).subscribe(data=>{
      console.log(data);
      this._router.navigate(["/"]);
    },
    err=>{
      console.log(err);
    });
  }
}
