import { Component, OnInit, Input } from '@angular/core';
import { EmployeerService } from '../../../services/employeer.service';
import { DatastorerService} from '../../../services/datastorer.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Orgdata } from '../../../models/orgdata';
@Component({
  selector: 'app-orgdetail',
  templateUrl: './orgdetail.component.html',
  styleUrls: ['./orgdetail.component.scss']
})
export class OrgdetailComponent implements OnInit {
  @Input() id : any;
  constructor(private _emp : EmployeerService,private _router : Router,
              private _route : ActivatedRoute, private _dst : DatastorerService) { }
  data : any;
  dataArray :Orgdata={
    organization_name : "",
    address : "",
    contact : [""],
    employeeCapacity : null,
    photos : "" ,
    email : "",
    director : [""] ,
    ceo : "",
    safetyRating : null
  };
  imageUrl : string;
  dat : any;
  msg = "";
  ngOnInit(): void {
    this._route.paramMap.subscribe((params : ParamMap)=>{
      let name = params.get('emailId');
      this.dat = name;
      // console.log(name);
    })
    this._emp.searchEmployeer(this.dat).subscribe(result=>{
      // console.log(result);
      this.data = result;

      // console.log(this.data.detail.organization_name);
      // console.log(this.data.detail.address);
      // console.log(this.data.detail.contact);
      // console.log(this.data.detail.employeeCapacity);
      // console.log(this.data.detail.photos) ;
      // console.log(this.data.detail.email);
      // console.log(this.data.detail.director);
      // console.log(this.data.detail.ceo);
      // console.log(this.data.detail.safetyRating);

      this.dataArray={
        organization_name :this.data.detail.organization_name,
        address : this.data.detail.address,
        contact : this.data.detail.contact,
        employeeCapacity : this.data.detail.employeeCapacity,
        photos : this.data.detail.photos ,
        email : this.data.detail.email,
        director : this.data.detail.director,
        ceo : this.data.detail.ceo,
        safetyRating : this.data.detail.safetyRating,
      }
      this.imageUrl = this.data.detail.photos;
      // console.log(this.dataArray);
    },
    err=>{
      this.msg = "Check the spelling";
    });

  }
  callComponent(){
    let email = this.dataArray.email;
    // console.log(email);
    let userType = localStorage.getItem("Usertype");
    if(userType=="employeer"){
      this.msg = "You can not review another organisation";
    }
    else{
      this._router.navigate(["employeer/addorgreview", email]);
    }
  }
}
