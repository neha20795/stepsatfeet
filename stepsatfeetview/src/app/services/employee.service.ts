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
  findEmployee(name :string){
    console.log(name);
    return this.__http.get("http://localhost:3000/empsearch/"+name);
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
/*
return{
      _id : "1047abcd",
      fname : "Sneha",
      lname : "Sharma",
      dob : new Date('20/07/1995').toLocaleDateString,
      email : "neha@sharma.in",
      address : "Indore",
      organization : "Tapan Garments",
      qualification : 4,
      mobile : "8821975526",
      experience : 0,
      gender : 'F',
      image : "dataneha01"
    }
*/
