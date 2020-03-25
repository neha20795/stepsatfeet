import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  componentName:string ='EmployeeLogin';
  
  message(compname){
    // console.log(compname);
    console.log(this.componentName);
    this.componentName = compname;
  }

}
