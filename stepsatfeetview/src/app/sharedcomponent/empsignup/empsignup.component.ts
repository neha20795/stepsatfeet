import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { EmpimageformService } from '../../services/empimageform.service';
import { EmpimageuploadService } from '../../services/empimageupload.service';
@Component({
  selector: 'app-empsignup',
  templateUrl: './empsignup.component.html',
  styleUrls: ['./empsignup.component.scss']
})
export class EmpsignupComponent implements OnInit {

  constructor(private _emp : EmployeeService,
              private route: Router,
              private _form : EmpimageformService,
              private _upload : EmpimageuploadService) { }

  emp : Employee={
    fname : "",
      lname : "",
      dob : new Date(),
      email : "",
      password :"",
      address : "",
      organization : "",
      qualification : 0,
      mobile: "",
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
  add(){
      console.log(this.emp);
      this._upload.fileUpload(this.form).subscribe(data=>{
        this.emp.image = data.name;
        console.log(this.emp.image);
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

