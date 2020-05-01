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
  message : any;
  ngOnInit(): void {
  }
  add(){
      console.log(this.emp);
      this._emp.addEmployee(this.emp).subscribe(data=>{
        console.log(data);
        console.log("data.statusText");

        let myurl = "/";
        // this.route.navigate(["/home"]);
        // this.route.navigate(['/home']).then(nav => {
        //   console.log(nav); // true if navigation is successful
        // }, err => {
        //   console.log("Not found") // when there's an error
        // });



        this.route.navigateByUrl(myurl).then(e => {
          if (e) {
            this.emp = this._emp.emptyEmployee();
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
            console.log(e);
          }
        });
      },
      error=>{
        console.log(error.msg);
        this.message = error.error.msg;
      });
    }

}
