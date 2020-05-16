import { Component, OnInit } from '@angular/core';
import { Employeedata } from '../../models/employeedata';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showselectedData : string="Update Detail";
  url : string = "updatedetail";
  msg : string ="Click below button if you want to edit your information";
  constructor() { }
  option : number =1;
  emp : string;
  ngOnInit(): void {
    this.emp= localStorage.getItem("Usertype");
  }
 call(option: number){
  this.option = option;
    switch(this.option){
      case 1 : this.url = "updatedetail"; this.showselectedData="Update Detail";
               this.msg="Click below button if you want to edit your information"; break;
      case 2 : this.url = "uploadimages"; this.showselectedData="Upload Images";
               this.msg="Click below button if you want to upload more images"; break;
      case 3 : this.url = this.emp+"/reviewbyyou"; this.showselectedData="Reviews Given By You";
               this.msg="Click below button if you want to view reviews given by you"; break;
      case 4 : this.url = this.emp+"/reviewforyou"; this.showselectedData="Review Received By You";
               this.msg="Click below button if you want to view reviews you received"; break;
      case 5 : this.url = this.emp+"/confidentialinforequest"; this.showselectedData="Confidential Information";
               this.msg="Click below button to check about Confidential Aggrement Request"; break;
      case 6 : this.url = this.emp+"/review"; this.showselectedData="Review";
               this.msg="Click below button if you want to give review"; break;
      default : this.showselectedData="Select the option:";  this.msg="Select one of the option that you want to perform";
    }
 }
}
