import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Employeelogin } from '../../models/employeelogin';
import { EmploginService } from '../../services/emplogin.service';
import { EmployeestateService } from '../../state/employeestate.service';
import { Employeedata } from '../../models/employeedata';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.scss']
})
export class EmploginComponent implements OnInit {
  errorMsg: any;
  info$: Observable<Employeedata>;
  state$: Observable<Employeedata>;


  constructor(
        private _auth : EmploginService,
        private _router : Router,
        private stateService : EmployeestateService
            ) { }

  componentName : boolean = true;
  user : Employeelogin={
    username : "",
    password : ""
  };
  ngOnInit(): void {
  }


  callComponent(){
    console.log("comp  value"+this.componentName)
    this.componentName = !this.componentName;
  }
  empLogin(){
    console.log("Hello I am in");
    console.log(this.user.username+" "+this.user.password);
    this._auth.doLogin(this.user).subscribe(data=>{
      console.log(data);
      localStorage.setItem("mytoken", data.token);
      var infoData : Employeedata ={
        _id: data.detail._id,
        fname: data.detail.fname ,
        lname: data.detail.lname,
        dob: data.detail.dob,
        email:data.detail.email,
        address:data.detail.address,
        organization:  data.detail.organization,
        qualification: data.detail.qualification,
        mobile: data.detail.mobile,
        experience: data.detail.experience ,
        gender: data.detail.gender,
        image:data.detail.image
      }
      this.info$ = this.stateService.state.pipe(map(state => state._id));
      this.state$ = this.stateService.state;
      this.stateService.changeName(infoData);
      this._router.navigate(["/employee"]);
    },
    err=>{
      this.errorMsg = err.error.msg;
    });
  }
}

