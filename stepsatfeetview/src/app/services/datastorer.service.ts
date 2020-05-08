import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatastorerService {

  constructor(private _http : HttpClient, private _router : Router) { }
  userid : string ;
  imagename : string;
  logvalue : boolean = false;
  setname(value : string, val :string){
    this.userid = value;
    this.imagename = val;
    }

  public getData(): any {
    const dataObservable = new Observable(observer => {
           setTimeout(() => {
               observer.next(this.imagename);
           }, 1000);
    });

    return dataObservable;
  }
  setLogValue(val : boolean){
    this.logvalue = val;
  }
  public getLogValue(): any {
    const dataObservable = new Observable(observer => {
           setTimeout(() => {
               observer.next(this.logvalue);
           }, 1000);
    });

    return dataObservable;
  }

}
