import { Injectable } from '@angular/core';
import { Emptoempreview } from '../models/emptoempreview';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmptoempreviewService {

  constructor(private __http : HttpClient) { }
  addReview(emptoempreview:Emptoempreview) {
    // return this.allStudent;
    console.log(emptoempreview);
    return this.__http.post<any>("http://localhost:3000/emptoempreview", emptoempreview);
  }
  emptyReview(){
    return {
      empidgiver : "",
      good : [""],
      bad :[""],
      positon : "",
      rating : null,
      empidreciever : ""
    }
  }
}
