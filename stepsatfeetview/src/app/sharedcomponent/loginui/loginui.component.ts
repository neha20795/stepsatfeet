import { Component, OnInit } from '@angular/core';
import { Employeelogin } from 'src/app/models/employeelogin';
import { EmploginService } from 'src/app/services/emplogin.service';
import { Router } from '@angular/router';
import { DatastorerService } from '../../services/datastorer.service';

@Component({
  selector: 'app-loginui',
  templateUrl: './loginui.component.html',
  styleUrls: ['./loginui.component.scss']
})
export class LoginuiComponent implements OnInit {

  constructor(
      private _auth : EmploginService,
        private _router : Router,
        private dst : DatastorerService
  ) { }
  componentName : boolean = true;
  errorMsg : string;
  ngOnInit(): void {
  }
  callAnotherComponent(){
    this.componentName = !this.componentName;
  }
  user : Employeelogin={
    username : "",
    password : ""
  };
  login(){
    if(this.componentName){
      console.log("Hello I am in");
      console.log(this.user.username+" "+this.user.password);
      this._auth.doLogin(this.user).subscribe(data=>{
      console.log(data);
      localStorage.setItem("mytoken", data.token);
      this.dst.setLogValue(false);
      this._router.navigate(["/employee"]);
    },
    err=>{
      this.errorMsg = err.error.msg;
    });
    }
  }
}

