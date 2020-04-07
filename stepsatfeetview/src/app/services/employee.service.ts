import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private __http : HttpClient) { }
  addEmployee(employee:Employee) {
    // return this.allStudent;
    console.log(employee);
    return this.__http.post<any>("http://localhost:3000", employee);
  }
  emptyEmployee(){
    return {
      fname : "",
      lname : "",
      dob : new Date(),
      email : "",
      password :"",
      address : "",
      organization : "",
      qualification : 0,
      mobile : "",
      experience : 0,
      gender : '',
      image : ""
    }
  }
}
