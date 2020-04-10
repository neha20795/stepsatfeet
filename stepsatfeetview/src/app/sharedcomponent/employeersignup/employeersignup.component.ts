import { Component, OnInit } from '@angular/core';
import { Employeer } from '../../models/employeer';
import { EmployeerService } from '../../services/employeer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeersignup',
  templateUrl: './employeersignup.component.html',
  styleUrls: ['./employeersignup.component.scss']
})
export class EmployeersignupComponent implements OnInit {

  constructor(private _emp : EmployeerService, private route: Router) { }
  emp : Employeer={
    organization_name : "",
      registration_date : null,
      certification_type : "",
      director : [""],
      ceo : "",
      address : "",
      contact : "",
      employeeCapacity : null,
      safetyRating : null,
      photos : ""
  };
  ngOnInit(): void {
  }
  add(){
      console.log(this.emp);
      this._emp.addEmployeer(this.emp).subscribe(data=>{
        console.log(data);
        console.log("data.statusText");
        this.emp = this._emp.emptyEmployeer();
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
