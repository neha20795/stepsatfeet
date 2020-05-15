import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateinfo',
  templateUrl: './updateinfo.component.html',
  styleUrls: ['./updateinfo.component.scss']
})
export class UpdateinfoComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit(): void {
    let val = localStorage.getItem("Usertype");
    if(val=='employee')
    {
      this._router.navigate(["/employee/updatedetail"]);
    }
    else if(val=='employeer'){
      this._router.navigate(["/employee/updatedetail"]);
    }
  }

}
