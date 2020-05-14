import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Employeelogin } from '../../models/employeelogin';
import { EmploginService } from '../../services/emplogin.service';
import { EmprloginService } from '../../services/emprlogin.service';
import { EmployeestateService } from '../../state/employeestate.service';
import { Employeedata } from '../../models/employeedata';
import { DatastorerService } from '../../services/datastorer.service';
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
  checkforloginstatus : boolean = false;
  constructor(
        private _auth : EmploginService,
        private _authr : EmprloginService,
        private _router : Router,
        private stateService : EmployeestateService,
        private dst : DatastorerService
            ) { }

  componentName : boolean = true;
  user : Employeelogin={
    username : "",
    password : ""
  };
  ngOnInit(): void {
    let avr = this.dst.getLogValue();
    // console.log("AVR"+avr);
  }


  callComponent(){
    // console.log("comp  value"+this.componentName)
    this.componentName = !this.componentName;
  }
  empLogin(){
    // console.log("Employee");
    // console.log(this.user.username+" "+this.user.password);
    this._auth.doLogin(this.user).subscribe(data=>{
      // console.log(data);
      localStorage.setItem("mytoken", data.detail.email);
      localStorage.setItem("Usertype", "employee");
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
      this.dst.setLogValue(false);
      this.dst.setType("Employee");
      localStorage.setItem("Usertype", "employee");
      this._router.navigate(["/employee"]);
    },
    err=>{
      this.errorMsg = err.error.msg;
    });
  }

  emprLogin(){
    // console.log("Employeer");
    // console.log(this.user.username+" "+this.user.password);
    this._authr.doLogin(this.user).subscribe(data=>{
      // console.log(data);
      localStorage.setItem("mytoken", data.detail.email);
      localStorage.setItem("Usertype", "employeer");
      this.info$ = this.stateService.state.pipe(map(state => state._id));
      this.state$ = this.stateService.state;
      // this.stateService.changeName(infoData);
      this.dst.setLogValue(false);
      this.dst.setType("Employeer");
      this._router.navigate(["/employeer"]);
    },
    err=>{
      this.errorMsg = err.error.msg;
    });
  }
}

