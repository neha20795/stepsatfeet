import { Injectable } from '@angular/core';
import { Orgreview  } from '../models/orgreview';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrgreviewService {

  constructor(private __http : HttpClient) { }
  addEmployeerReview(orgreview:Orgreview) {
    // return this.allStudent;
    console.log(orgreview);
    return this.__http.post<any>("http://localhost:3000/orgreview", orgreview);
  }
  emptyReview(){
    return {
      empid : "",
      orgid : "",
      pros : [""],
      cons : [""],
      rating: null,
      type : ""
    }
  }
}
