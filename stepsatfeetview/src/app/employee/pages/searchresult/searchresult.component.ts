import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { DatastorerService } from '../../../services/datastorer.service';
import { Displaydata } from '../../../models/displaydata';
@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {
  dataArray : Displaydata[]=[{
    email : '',
    imageeurl : '',
    fname : '',
    lname : '',
    gender :  '',
    address : '',
    organization : ''
  }];
  dat : any;
  msg = "";
  data : any;
  constructor(private _emp : EmployeeService,private _router : Router, private _route : ActivatedRoute, private dst : DatastorerService) { }
  result : string;
  ngOnInit(): void {
    this._route.paramMap.subscribe(
      (params : ParamMap)=>{
        let name = params.get('name');
        this.dat = name===null?"Neha":name;
        console.log(name);
      })
      this._emp.findEmployee(this.dat).subscribe(result=>{
        console.log(result);
         this.data = result;
        for(let i=0; i<this.data.detail.length;i++)
      {
        if(i==0){
          this.dataArray.pop();
        }
        let record : Displaydata={
          fname : this.data.detail[i].fname,
          lname : this.data.detail[i].lname,
          organization : this.data.detail[i].organization,
          email : this.data.detail[i].email,
          gender : this.data.detail[i].gender=="F"?"Female":"Male",
          address : this.data.detail[i].address,
          imageeurl : this.data.detail[i].image
        };
        this.dataArray.push(record);
      }
      },
      err=>{
        this.msg = "Check the spelling";
      });
  }

  details(e : string){
    this._router.navigate(["employee/employeedetail", e]);
  }

}
