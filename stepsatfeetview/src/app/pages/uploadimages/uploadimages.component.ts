import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpimageformService } from '../../services/empimageform.service';
import { EmpimageuploadService } from '../../services/empimageupload.service';
import { OrgimageuploadService } from '../../services/orgimageupload.service';
import { Imageupload } from '../../models/imageupload';
import { EmployeeService } from '../../services/employee.service';
import { EmployeerService } from '../../services/employeer.service';
@Component({
  selector: 'app-uploadimages',
  templateUrl: './uploadimages.component.html',
  styleUrls: ['./uploadimages.component.scss']
})
export class UploadimagesComponent implements OnInit {
  image : string;
  email : string;
  constructor(private _emp : EmployeeService,
              private _org : EmployeerService,
              private route: Router,
              private _form : EmpimageformService,
              private _upload : EmpimageuploadService,
              private _orgupload : OrgimageuploadService,
              ) { }
val : string;
  ngOnInit(): void {
    this.val = localStorage.getItem("Usertype");
  this.email = localStorage.getItem("mytoken");
  }
  form : any;
  upload(fileArr){
    this.form = this._form.uploadFormCreate(fileArr[0], "image");
  }
  add(){
    console.log(this.val+","+this.email);
    if(this.val=='employee')
    {
      this._upload.fileUpload(this.form).subscribe(data=>{
          this.image = data['name'];
          console.log(data['name']);
          console.log("image---"+this.image);
          // service call for image update
        let imageinfo : Imageupload = {
          image : this.image
        }
        this._emp.addImage(this.email, imageinfo).subscribe(data=>{
          console.log(data);
          console.log("uploaded");
            this.route.navigate(["/"]);
        },
          error => {
            console.log(error);
            console.log("error");
          })
        },
        error => {
          console.log(error);
          console.log("error");
        })
    }
    else if(this.val=='employeer'){
      this._orgupload.fileUpload(this.form).subscribe(data=>{
          this.image = data['name'];
          console.log(data);
          let imageinfo : Imageupload = {
            image : this.image
          }
          this._org.addImage(this.email, imageinfo).subscribe(data=>{
            console.log(data);
            console.log("uploaded");
              this.route.navigate(["/"]);

            },
            error => {
              console.log(error);
              console.log("error");
            }
            )
          // service call for image update
        },
        error => {
          console.log(error);
          console.log("error");
        })
    }
  }
}
