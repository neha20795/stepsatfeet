import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.scss']
})
export class SearchEmpComponent implements OnInit{

  constructor(private _router : Router) { }
  searchData : string;
  ngOnInit(): void {
  }


  searchInfo(searchname : string){
    this.searchData = searchname;
    this._router.navigate(["employee/employeesearch", searchname]);
  }
}
