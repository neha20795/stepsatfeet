import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  componentName:string ='EmployeeLogin'

  add(){

  }


  message(compname){
    // console.log(compname);
    console.log(this.componentName);
    this.componentName = compname;

  }

}

