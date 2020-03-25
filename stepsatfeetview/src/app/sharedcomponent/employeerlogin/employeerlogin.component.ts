import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employeerlogin',
  templateUrl: './employeerlogin.component.html',
  styleUrls: ['./employeerlogin.component.scss']
})
export class EmployeerloginComponent implements OnInit {
  @Output() onMainPageCall= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  callComponent(){
    console.log("emOrg");
    this.onMainPageCall.emit("EmployeeLogin");
  }

}
