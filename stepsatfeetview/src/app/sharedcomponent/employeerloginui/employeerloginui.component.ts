import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employeerloginui',
  templateUrl: './employeerloginui.component.html',
  styleUrls: ['./employeerloginui.component.scss']
})
export class EmployeerloginuiComponent implements OnInit {
  @Output() onMainUICall= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  callComponent(){
    console.log("emOrg");
    this.onMainUICall.emit("EmployeeLogin");
  }

}
