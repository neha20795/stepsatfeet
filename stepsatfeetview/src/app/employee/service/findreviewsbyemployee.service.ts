import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FindreviewsbyemployeeService {

  constructor(private __http : HttpClient) { }
  find(email : string){
    return this.__http.get("http://localhost:3000/findreview/"+email)
  }
}
