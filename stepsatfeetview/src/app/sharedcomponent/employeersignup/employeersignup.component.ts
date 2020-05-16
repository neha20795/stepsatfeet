import { Component, OnInit } from '@angular/core';
import { Employeer } from '../../models/employeer';
import { EmployeerService } from '../../services/employeer.service';
import { Router } from '@angular/router';
import { OrgimageuploadService } from '../../services/orgimageupload.service';
import { EmpimageformService } from '../../services/empimageform.service';
import { FormControl, FormArray} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employeersignup',
  templateUrl: './employeersignup.component.html',
  styleUrls: ['./employeersignup.component.scss']
})
export class EmployeersignupComponent implements OnInit {
  empForm:FormGroup;
  constructor(private _emp : EmployeerService,
              private route: Router,
              private _form : EmpimageformService,
              private _upload : OrgimageuploadService,
              private fb:FormBuilder) {
                this.empForm=this.fb.group({
                  mobiles: this.fb.array([]) ,
                  directors : this.fb.array([]) ,
                })
              }
  emp : Employeer={
    organization_name : "",
      registration_date : null,
      certification_type : "",
      director : [""],
      ceo : "",
      email : "",
      password : "",
      address : {
        house_no : null,
        street : "",
        town : "",
        city : "",
        state : "",
        country : "",
        pincode : null
      },
      contact : [""],
      employeeCapacity : null,
      safetyRating : null,
      photos : [""]
  };
  form : any;
  message : any;
  ngOnInit(): void {
  }
  upload(fileArr){
    this.form = this._form.uploadFormCreate(fileArr[0], "image");
  }
  mobiles(): FormArray {
    return this.empForm.get("mobiles") as FormArray
  }
  newMobile(): FormGroup {
    return this.fb.group({
      mobile: ''
    })
  }
  addMobile() {
    // console.log("Adding a mobile");
    this.mobiles().push(this.newMobile());
  }
  removeMobile(mobIndex:number) {
    this.mobiles().removeAt(mobIndex);
  }
  directors(): FormArray {
    return this.empForm.get("directors") as FormArray
  }
  newDirector(): FormGroup {
    return this.fb.group({
      Director: ''
    })
  }
  addDirector() {
    // console.log("Adding a Director");
    this.directors().push(this.newDirector());
  }
  removeDirector(dirIndex:number) {
    this.directors().removeAt(dirIndex);
  }
  add(){
    // console.log(this.emp);
    // console.log(this.empForm.value);
    let le = (this.empForm.get(['mobiles']).value).length;
    let dl = (this.empForm.get(['directors']).value).length;

      // console.log(this.emp);
      this._upload.fileUpload(this.form).subscribe(data=>{
        // this.emp.photos = data.name;
        // console.log(this.emp.photos);
        this.emp.photos[0] = data.name;
          // console.log(this.emp.photos);
          for(let i=0; i<le;i++){
            let vars = this.empForm.get(['mobiles',i]).get(['mobile']).value;
            let value = vars;
            this.emp.contact.push(value);
            // console.log(value);
          }
          for(let i=0; i<le;i++){
            let vars = this.empForm.get(['directors',i]).get(['Director']).value;
            let value = vars;
            this.emp.director.push(value);
            // console.log(value);
          }
        this._emp.addEmployeer(this.emp).subscribe(data=>{
          // console.log(data);
          // console.log("data.statusText");
          let myurl = "/";
          this.route.navigateByUrl(myurl).then(e => {
            if (e) {
              this.emp = this._emp.emptyEmployeer();
              console.log("Navigation is successful!");
            } else {
              console.log("Navigation has failed!");
              // console.log(e);
            }
          });
        },
        error=>{
          console.log(error.msg);
          this.message = error.error.msg;
        });
      },err=>{
        console.log("error"+err);
      });
    }
}
