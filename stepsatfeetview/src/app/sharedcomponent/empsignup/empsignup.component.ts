import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empsignup',
  templateUrl: './empsignup.component.html',
  styleUrls: ['./empsignup.component.scss']
})
export class EmpsignupComponent implements OnInit {

  constructor(private _emp : EmployeeService, private route: Router) { }
  emp : Employee={
    fname : "",
      lname : "",
      dob : new Date(),
      email : "",
      password :"",
      address : "",
      organization : "",
      qualification : 0,
      mobile: "",
      experience : 0,
      gender : "",
      image : ""
  };
  ngOnInit(): void {
  }
  add(){
      console.log(this.emp);
      this._emp.addEmployee(this.emp).subscribe(data=>{
        console.log(data);
        console.log("data.statusText");
        this.emp = this._emp.emptyEmployee();
        let myurl = "/employeelogin/";
        this.route.navigateByUrl(myurl).then(e => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
        });
      },
      error=>{
        console.log("error");
      });
    }

}
