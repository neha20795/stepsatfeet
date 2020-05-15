import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviewbyyou',
  templateUrl: './reviewbyyou.component.html',
  styleUrls: ['./reviewbyyou.component.scss']
})
export class ReviewbyyouComponent implements OnInit {

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
