import { Injectable } from '@angular/core';
import { Employeer } from '../models/employeer';
import { HttpClient } from '@angular/common/http';
import {Imageupload} from "../models/imageupload";

@Injectable({
  providedIn: 'root'
})
export class EmployeerService {

  constructor(private __http : HttpClient) { }
  addEmployeer(employeer:Employeer) {
    // return this.allStudent;
    console.log(employeer);
    return this.__http.post<any>("http://localhost:3000/employeer", employeer);
  }
  findEmployeer(name :string){
    console.log(name);
    return this.__http.get("http://localhost:3000/employeer/orgsearch/"+name);
  }
  searchEmployeer(name :string){
    console.log(name);
    return this.__http.get("http://localhost:3000/employeer/orgdetail/"+name);
  }
  addImage(email : string, data : Imageupload){
    return this.__http.post("http://localhost:3000/employeer/addimage/"+email, data);
  }

  emptyEmployeer(){
    return {
      organization_name : "",
      registration_date : null,
      certification_type : "",
      director : [""],
      email : "",
      password : "",
      ceo : "",
      address : {
        house_no : null,
        street : "",
        town : "",
        city : "",
        state : "",
        country : "",
        pincode : null
      },
      contact : [""],
      employeeCapacity : null,
      safetyRating : null,
      photos : [""]
    }
  }
}

