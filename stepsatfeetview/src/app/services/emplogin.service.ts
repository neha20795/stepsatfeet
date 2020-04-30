import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Employeelogin } from '../models/employeelogin';
@Injectable({
  providedIn: 'root'
})
export class EmploginService {

  constructor(private _http : HttpClient, private _router : Router) { }


  doLogin(user:Employeelogin){
    return this._http.post<any>("http://localhost:3000/empLogin", user);
  }

  logout(){
    localStorage.removeItem("mytoken");
    this._router.navigate(["/"]);
  }

  getToken(){
    return localStorage.getItem("mytoken");
  }

  isLoggedIn(){

    if(localStorage.getItem("mytoken"))
    {
      return true;
    }
    else{
      return false;
    }
  }

}
