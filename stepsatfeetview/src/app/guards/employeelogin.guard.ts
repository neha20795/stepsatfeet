import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmploginService } from '../services/emplogin.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeloginGuard implements CanActivate {
  constructor(
    private _authemp : EmploginService,
    private _router : Router
    ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this._authemp.isLoggedIn())
      {
        return true;
      }
      else{
        this._router.navigate(["/"]);
        return false;
      }
  }

  check(){
    if(this._authemp.isLoggedIn())
      {
        return true;
      }
      else{
        return false;
      }
  }

}
