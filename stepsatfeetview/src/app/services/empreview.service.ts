import { Injectable } from '@angular/core';
import {  Empreview } from '../models/empreview';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpreviewService {

  constructor(private __http : HttpClient) { }
  addEmployeeReview(empreview:Empreview) {
    // return this.allStudent;
    console.log(empreview);
    return this.__http.post<any>("http://localhost:3000/empreview", empreview);
  }
  emptyReview(){
    return {
      empid : null,
      organizationid : null,
      review : [""],
      good : [""],
      bad : [""],
      position : "",
      rating : null
    }
  }

}
