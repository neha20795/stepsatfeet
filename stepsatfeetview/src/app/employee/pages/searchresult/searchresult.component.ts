import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {

  constructor(private _router : Router, private _route : ActivatedRoute) { }
  result : string;
  ngOnInit(): void {
    this._route.paramMap.subscribe(
      (params : ParamMap)=>{
        let name = params.get('name');
        this.result = name;
      }
    )
  }

}
