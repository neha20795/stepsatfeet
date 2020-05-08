import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { EmpimageformService } from '../../services/empimageform.service';
import { EmpimageuploadService } from '../../services/empimageupload.service';
import { FormControl, FormArray} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-empsignup',
  templateUrl: './empsignup.component.html',
  styleUrls: ['./empsignup.component.scss']
})
export class EmpsignupComponent implements OnInit {
  empForm:FormGroup;
  constructor(private _emp : EmployeeService,
              private route: Router,
              private _form : EmpimageformService,
              private _upload : EmpimageuploadService,
              private fb:FormBuilder) {
                this.empForm=this.fb.group({
                  mobiles: this.fb.array([]) ,
                })
               }

  emp : Employee={
    fname : "",
      lname : "",
      dob : new Date(),
      email : "",
      password :"",
      address : "",
      organization : "",
      qualification : 0,
      mobile: [""],
      experience : 0,
      gender : "",
      image : ""
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
    console.log("Adding a mobile");
    this.mobiles().push(this.newMobile());
  }
  removeEmployee(mobIndex:number) {
    this.mobiles().removeAt(mobIndex);
  }
  add(){
    console.log(this.emp);
    console.log(this.empForm.value);
    let le = (this.empForm.get(['mobiles']).value).length;
      console.log(this.emp);
      this._upload.fileUpload(this.form).subscribe(data=>{
        this.emp.image = data.name;
        console.log(this.emp.image);
        this.emp.image = data.name;
          console.log(this.emp.image);
          for(let i=0; i<le;i++){
            let vars = this.empForm.get(['mobiles',i]).get(['mobile']).value;
            let value = vars;
            this.emp.mobile.push(value);
            console.log(value);
          }
        this._emp.addEmployee(this.emp).subscribe(data=>{
          console.log(data);
          console.log("data.statusText");
          let myurl = "/";
          this.route.navigateByUrl(myurl).then(e => {
            if (e) {
              this.emp = this._emp.emptyEmployee();
              console.log("Navigation is successful!");
            } else {
              console.log("Navigation has failed!");
              console.log(e);
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

