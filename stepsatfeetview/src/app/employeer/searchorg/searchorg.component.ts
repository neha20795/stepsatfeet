import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-searchorg',
  templateUrl: './searchorg.component.html',
  styleUrls: ['./searchorg.component.scss']
})
export class SearchorgComponent implements OnInit {

  searchData : string;

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }
  searchInfo(searchname : string){
    this.searchData = searchname;
    this._router.navigate(["employeer/orgsearch", searchname]);
  }

}
