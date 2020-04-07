import { Injectable } from '@angular/core';
import { Confidentialinfo } from '../models/confidentialinfo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfidentialreviewService {

  constructor(private __http : HttpClient) { }
  addConfidentialReview(confidentialinfo:Confidentialinfo) {
    // return this.allStudent;
    console.log(confidentialinfo);
    return this.__http.post<any>("http://localhost:3000/confidentialinfo", confidentialinfo);
  }
  emptyReview(){
    return {
      orgidrequired : "",
      orgidgiver : "",
      doj : new Date(),
      salary : null,
      bond : null,
      terms : "",
      behavior : [""],
      reporting : null,
      reasontoleave : [""]
    }
  }
}
