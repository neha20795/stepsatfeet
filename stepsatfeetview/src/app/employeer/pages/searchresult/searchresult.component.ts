import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { EmployeerService } from '../../../services/employeer.service';
import { Orgdisplaydata } from '../../../models/orgdisplaydata';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {

dataArray : Orgdisplaydata[]=[{
  organization_name : "",
  address : "",
  contact : [""],
  employeeCapacity : null,
  photos : "",
  email : ""
}];
dat : any;
  msg = "";
  data : any;
  constructor(private _emp : EmployeerService,
              private _router : Router,
              private _route : ActivatedRoute) { }

  result : string;

  ngOnInit(): void {
    this._route.paramMap.subscribe(
      (params : ParamMap)=>{
        let name = params.get('name');
        console.log("Is employeer name being displayed"+name);
        this.dat = name===null?"Tapan Garments":name;
        // console.log(name);
      })
      this._emp.findEmployeer(this.dat).subscribe(result=>{
        // console.log(result);
         this.data = result;
        for(let i=0; i<this.data.detail.length;i++)
      {
        if(i==0){
          this.dataArray.pop();
        }
        let record : Orgdisplaydata={
          organization_name : this.data.detail[i].organization_name,
          address : this.data.detail[i].address,
          contact : this.data.detail[i].contact,
          employeeCapacity : this.data.detail[i].employeeCapacity,
          photos : this.data.detail[i].photos,
          email : this.data.detail[i].email
          // fname : this.data.detail[i].fname,
          // lname : this.data.detail[i].lname,
          // organization : this.data.detail[i].organization,
          // email : this.data.detail[i].email,
          // gender : this.data.detail[i].gender=="F"?"Female":"Male",
          // address : this.data.detail[i].address,
          // imageeurl : this.data.detail[i].image
        };
        this.dataArray.push(record);
      }
      },
      err=>{
        this.msg = "Check the spelling";
      });
  }

  details(emailId : string){
    this._router.navigate(["employeer/orgdetail", emailId]);
  }

}

