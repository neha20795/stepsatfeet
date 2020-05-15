import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploadimages',
  templateUrl: './uploadimages.component.html',
  styleUrls: ['./uploadimages.component.scss']
})
export class UploadimagesComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit(): void {
    let val = localStorage.getItem("Usertype");
    if(val=='Employee')
    {
      this._router.navigate(["/employee"]);
    }
    else if(val=='Employeer'){
      this._router.navigate(["/employee"]);
    }
  }

}
